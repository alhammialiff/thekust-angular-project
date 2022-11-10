import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // Input target binding from parent component via @Input() Directive
  // @Input()
  // dish: Dish; 

  // Retrieving input values via Route Parameters
  dish: Dish; 
  

  constructor(private dishService: DishService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Fetch ID from route URL parameters
    let id = this.route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }

  // Trigger app URL to go back
  goBack(): void{
    this.location.back();
  }

}
