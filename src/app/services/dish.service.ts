import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
// RXJS imports
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// By declaring @Injectable, we are allowing our app to use this service
@Injectable({
  providedIn: 'root'
})

export class DishService {
  constructor() { }

  getDishes(): Observable<Dish[]> {
    // [Using native JS Promise]
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 second delay
    //   setTimeout(() => {
    //     resolve(DISHES)
    //   }, 2000);
    // });

    // [Using RxJS observable]
    return of(DISHES).pipe(delay(2000));
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
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));

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
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<string[] | any>{
    return of(DISHES.map((dish)=> dish.id)); 
  }

}
