import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

// By declaring @Injectable, we are allowing our app to use this service
@Injectable({
  providedIn: 'root'
})

export class DishService {
  constructor() { }

  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: string): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  // This will be used to display featured dish in Home
  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish)=> dish.featured)[0]);
  }

}
