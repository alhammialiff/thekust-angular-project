import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes'; // Rather than importing data directly, use Service to do this for us 
import { DishService } from '../services/dish.service';
import { flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class MenuComponent implements OnInit {

  // In typescript Dish[] is a type
  // But it can be done without and typescript can still discern its type
  // Eg. dishes = DISHES;
  dishes: Dish[];
  errMess: string;

  // selectedDish: Dish = DISHES[0];
  // selectedDish: Dish;

  constructor(private dishService: DishService, 
      @Inject('BaseURL') private BaseURL) { }

  // ngOnInit is a Lifecycle Method: Executed when this component is created
  ngOnInit() {
    // Using service (dishService) to fetch dishes data
    // In this subscriber, there are success (dishes) => ... and failure (errmess) => parameters,
    // kind of like promise
    // When the Observable (dishService) caught an error, subscriber picks it up via errmess
    this.dishService.getDishes()
      .subscribe((dishes) => this.dishes = dishes,
        (errmess) => this.errMess = <any>errmess);

      // .catch((error) => console.log(error));
    
  }

  // onSelect 'hook' is linked with (click) event in .html
  // onSelect(dish: Dish) {
  //   this.selectedDish = dish; 
  // }



}
