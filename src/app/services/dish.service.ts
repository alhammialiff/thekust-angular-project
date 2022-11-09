import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

// By declaring @Injectable, we are allowing our app to use this service
@Injectable({
  providedIn: 'root'
})

export class DishService {
  constructor() { }
  
  getDishes(): Dish[] {
    return DISHES;
  }

}
