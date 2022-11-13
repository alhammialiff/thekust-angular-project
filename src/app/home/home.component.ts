import { Component, OnInit } from '@angular/core';

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
    private leaderService: LeaderService) { }

  ngOnInit() {
    // Fetch data from respective services
    this.dishService.getFeaturedDish()
      .then((featuredDish)=> this.dish = featuredDish);

    this.promotionService.getFeaturedPromotion()
      .then((promotion)=> this.promotion = promotion);

    this.leaderService.getFeaturedLeader()
      .then((featuredLeader)=> this.leader = featuredLeader);
  }

}
