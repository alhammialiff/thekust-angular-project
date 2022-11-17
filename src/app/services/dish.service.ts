import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';
// RXJS imports
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

// By declaring @Injectable, we are allowing our app to use this service
@Injectable({
  providedIn: 'root'
})

export class DishService {
  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    // [Using native JS Promise]
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 second delay
    //   setTimeout(() => {
    //     resolve(DISHES)
    //   }, 2000);
    // });

    // [Using RxJS observable]
    // return of(DISHES).pipe(delay(2000));

    // Fetching dishes data over HTTP from json-server (localhost:3002)
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }

  getDish(id: string): Observable<Dish> {
    // [Using native JS Promise]
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 second delay
    //   setTimeout(() => {
    //     resolve(DISHES.filter((dish) => (dish.id === id))[0])
    //   }, 2000);
    // });

    // [Using RxJS observable]
    // return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
    return this.http.get<Dish>(baseURL + 'dishes/' + id);

  }

  // This will be used to display featured dish in Home
  getFeaturedDish(): Observable<Dish> {
    // [Using native JS Promise]
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 second delay
    //   setTimeout(() => {
    //     resolve(DISHES.filter((dish) => dish.featured)[0])
    //   }, 2000);
    // });

    // [Using RxJS observable]
    // return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));

    return this.http
      .get<Dish>(baseURL + 'dishes?featured=true')
      .pipe(map(dishes => dishes[0]));

  }

  getDishIds(): Observable<string[] | any> {
    // return of(DISHES.map((dish) => dish.id));

    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }

}
