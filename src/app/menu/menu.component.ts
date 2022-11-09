import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  // In typescript Dish[] is a type
  // But it can be done without and typescript can still discern its type
  // Eg. dishes = DISHES;
  dishes: Dish[] = DISHES;

  // selectedDish: Dish = DISHES[0];
  selectedDish: Dish;

  constructor() { }

  ngOnInit() {

  }

  // onSelect 'hook' is linked with (click) in .html
  onSelect(dish: Dish) {
    this.selectedDish = dish; 
  }

}
