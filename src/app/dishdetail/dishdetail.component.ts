import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { DISHES } from '../shared/dishes';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // Input target binding from parent component via @Input() Directive
  // @Input()
  // dish: Dish; 

  // TS data types
  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  comment: Comment;
  commentForm: FormGroup;
  date: string;

  formErrors = {
    'comment': '',
    'author': ''
  }

  validationMessages = {
    'comment': {
      'required': 'Comment is required'
    },
    'author': {
      'required': 'Name is required',
      'minlength': 'Name must be at least 2 characters long',
      'maxlength': 'Name cannot be more than 25 characters long'
    }
  };

  @ViewChild('cform') commentFormDirective;

  constructor(private dishService: DishService,
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) {

    // Invoked to create comment form object
    this.createForm();

  }


  // Comment form creation method
  createForm() {

    this.commentForm = this.fb.group({
      rating: '5',
      comment: ['', Validators.required],
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      date: ''
    });

    // Subscribe to any value change in comment form
    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

  }

  // Value change handler method
  onValueChanged(data?: any) {

    if (!this.commentForm) {
      return;
    }

    const form = this.commentForm;

    for (const field in this.formErrors) {

      // If form errors has own property...
      if (this.formErrors.hasOwnProperty(field)) {

        // Clear previous error
        this.formErrors[field] = '';

        // Create 'control' var to get form field names (an object)
        const control = form.get(field);

        // If 'control' object is invalid and dirty and not null...
        if (control && control.dirty && !control.valid) {

          const messages = this.validationMessages[field];
          
          // Iterate key in control.errors
          for (const key in control.errors) {

            // Append validation message onto this.formError
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + '';
            }

          }

        }

      }

    }

  }

  // Comment form submission method
  onSubmit() {
    this.comment = this.commentForm.value;

    // Format date
    const epoch = Date.now();
    const date = new Date(epoch).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

    // Set date for this.comment
    this.comment['date'] = date;

    // [Debug - Leaving it for learning]
    // console.log("this.route.params['id']", this.route.snapshot.params['id']);
    // console.log(DISHES.filter((dish,idx) => dish.id === this.route.snapshot.params['id'])[0]);

    // Find current dish id via filter with this.route.snapshot.params['id']
    let dish = DISHES.filter((dish, idx) => dish.id === this.route.snapshot.params['id'])[0];

    // Append new comment into current dish comments array 
    dish.comments.push(this.comment);

    // [Debug - Leaving it for learning]
    // console.log(dish);

    // Reset commentForm values
    this.commentForm.reset({
      rating: '',
      comment: '',
      author: '',
      date: ''
    });

    console.log(this.comment);

    this.commentFormDirective.resetForm();
  }

  ngOnInit() {
    // Fetch ID from route URL parameters. Params is one of Angular built-in observables
    // snapshot: snapshot captures a 'snapshot' of the route service at the time it is invoked.
    // let id = this.route.snapshot.params['id'];

    // RxJS: What happens here?
    // getDishIds() is invoked and subscribe to monitor any change in values
    this.dishService.getDishIds()
      .subscribe((dishIds) => this.dishIds = dishIds);

    // RxJS: What happens here? 
    // Whenever params observable changes value (route parameter), switchMap immediately 
    // takes the params value and do a getDish (observable) from my dishService. Finally, the observable 
    // is subscribed
    this.route
      .params
      .pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });

    // [Debug - Leaving it for learning]
    // this.dishService.getDish(id)
    //   .subscribe((dish) => this.dish = dish);
  }

  // When invoked, it sets the prev and next dishId value
  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  // Trigger app URL to go back
  goBack(): void {
    this.location.back();
  }



}
