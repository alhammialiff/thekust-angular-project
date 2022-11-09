import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes'; // Rather than importing data directly, use Service to do this for us 
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  // In typescript Dish[] is a type
  // But it can be done without and typescript can still discern its type
  // Eg. dishes = DISHES;
  dishes: Dish[];

  // selectedDish: Dish = DISHES[0];
  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    // Using service (dishService) to fetch dishes data
    this.dishes = this.dishService.getDishes();
  }

  // onSelect 'hook' is linked with (click) event in .html
  onSelect(dish: Dish) {
    this.selectedDish = dish; 
  }

}
