import { Component, OnInit, Inject } from '@angular/core';

// TS Data Type
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { Leader } from '../shared/leader';

// Angular Services
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // TS: Data type
  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject("BaseURL") private BaseURL) { }

  ngOnInit() {
    // Fetch data from respective services
    // [RxJS] After RxJS implementation, .then (promise) is replaced by .subscribe (observable)
    this.dishService.getFeaturedDish()
      .subscribe((featuredDish)=> this.dish = featuredDish);

    this.promotionService.getFeaturedPromotion()
      .subscribe((promotion)=> this.promotion = promotion);

    this.leaderService.getFeaturedLeader()
      .subscribe((featuredLeader)=> this.leader = featuredLeader);
  }

}
