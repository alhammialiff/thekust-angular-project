import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Dish } from '../shared/dish';
import { Leader } from '../shared/leader';
import { Promotion } from '../shared/promotion';

import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { PromotionService } from '../services/promotion.service';

import { baseURL } from '../shared/baseurl';
import { Observable, of } from 'rxjs';

import { MatCardModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // The configurations required to run HomeComponent prior to test
  beforeEach(async(() => {

    // Mock services: Service functions name need to be the same as actual ones 
    let dishServiceStub = {
      getFeaturedDish: function(): Observable<Dish> {
        return of(DISHES.filter(dish => dish.featured === true)[0]);
      }
    }

    let promotionServiceStub = {
      getFeaturedPromotion: function(): Observable<Promotion>{
        return of(PROMOTIONS.filter(promo => promo.featured === true)[0]);
      }
    }

    let leaderServiceStub = {
      getFeaturedLeader: function(): Observable<Leader>{
        return of(LEADERS.filter(leader => leader.featured===true)[0]);
      }
    }

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{ path: 'home', component: HomeComponent }]),
        MatCardModule,
        MatProgressSpinnerModule
      ],
      declarations: [ HomeComponent ],
      providers: [
        {provide: DishService, useValue: dishServiceStub},
        {provide: LeaderService, useValue: leaderServiceStub},
        {provide: PromotionService, useValue: promotionServiceStub},
        {provide: 'BaseURL', useValue: baseURL}
      ]
    })
    .compileComponents();

    const dishservice = TestBed.get(DishService);
    const promotionservice = TestBed.get(PromotionService);
    const leaderservice = TestBed.get(PromotionService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // First test: It should create an instance of the Home Component
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Second test: It should have 3 featured cards
  it('card elements should be 3', () =>{
    fixture.detectChanges();

    let de: DebugElement;
    let el: HTMLElement;
    let featuredDishCard: HTMLElement;
    let featuredLeaderCard: HTMLElement;
    let featuredPromotionCard: HTMLElement;
    let ids: string[];
    let featured: any;

    featured = [
      DISHES.filter(dish => dish.featured === true)[0],
      LEADERS.filter(leader => leader.featured===true)[0],
      PROMOTIONS.filter(promo => promo.featured === true)[0]
    ];

    // de = fixture.debugElement.query(By.css('mat-card'));
    // el = de.nativeElement;
    // expect(el.textContent).toContain(DISHES[0].name.toUpperCase());

    // featuredCard = fixture.debugElement.nativeElement.querySelector('#featured-dish');
    featuredDishCard = fixture.debugElement.nativeElement;
    featuredLeaderCard = fixture.debugElement.nativeElement;
    featuredPromotionCard = fixture.debugElement.nativeElement;

    // console.log(featured[0].description);
    // console.log(featured[1].description);
    // console.log(featured[2].description);

    featuredDishCard = featuredDishCard.querySelector('#featured-dish');
    expect(featuredDishCard.innerText).toBe(featured[0].description);

    featuredLeaderCard = featuredLeaderCard.querySelector('#featured-leader');
    expect(featuredLeaderCard.innerText).toBe(featured[1].description);

    featuredPromotionCard = featuredPromotionCard.querySelector('#featured-promotion');
    expect(featuredPromotionCard.innerText).toBe(featured[2].description);

  })

});
