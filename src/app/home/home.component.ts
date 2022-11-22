import { Component, OnInit, Inject } from '@angular/core';

// TS Data Type
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { Leader } from '../shared/leader';

// Angular Services
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  // TS: Data type
  dish: Dish;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;
  promotion: Promotion;
  leader: Leader;

  // @Inject("BaseURL")... : This was derived in app.module provider.
  // Defining it below (in constructor) allows passing 'BaseURL' var to the template
  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject("BaseURL") private BaseURL) { }

  ngOnInit() {
    // Fetch data from respective services
    // [RxJS] After RxJS implementation, .then (promise) is replaced by .subscribe (observable)
    this.dishService.getFeaturedDish()
      .subscribe((featuredDish)=> this.dish = featuredDish,
        (errmess) => this.dishErrMess = <any>errmess);

    this.promotionService.getFeaturedPromotion()
      .subscribe((promotion)=> this.promotion = promotion,
      (errmess)=> this.promoErrMess = <any>errmess);

    this.leaderService.getFeaturedLeader()
      .subscribe((featuredLeader)=> this.leader = featuredLeader,
      (errmess)=> this.leaderErrMess = <any>errmess);
  }

}
