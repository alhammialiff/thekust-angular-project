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
  let de: DebugElement;
  let el: HTMLElement;
  let ids: string[];
  const featured: any = [
    DISHES.filter(dish => dish.featured === true)[0],
    LEADERS.filter(leader => leader.featured === true)[0],
    PROMOTIONS.filter(promo => promo.featured === true)[0]
  ];

  // The configurations required to run HomeComponent prior to test
  beforeEach(async(() => {

    // Mock services (or Stubs): Service functions name need to be the same as actual ones 
    let dishServiceStub = {
      getFeaturedDish: function (): Observable<Dish> {
        return of(DISHES.filter(dish => dish.featured === true)[0]);
      }
    }

    let promotionServiceStub = {
      getFeaturedPromotion: function (): Observable<Promotion> {
        return of(PROMOTIONS.filter(promo => promo.featured === true)[0]);
      }
    }

    let leaderServiceStub = {
      getFeaturedLeader: function (): Observable<Leader> {
        return of(LEADERS.filter(leader => leader.featured === true)[0]);
      }
    }

    // Test Configurations
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{ path: 'home', component: HomeComponent }]),
        MatCardModule,
        MatProgressSpinnerModule
      ],
      declarations: [HomeComponent],
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: LeaderService, useValue: leaderServiceStub },
        { provide: PromotionService, useValue: promotionServiceStub },
        { provide: 'BaseURL', useValue: baseURL }
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

  // First test: This should create an instance of the Home Component
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Second test: Featured card elements should have 3 featured cards headlines
  it('Featured card elements should have 3 featured headlines', () => {
    
    fixture.detectChanges();
    
    let featuredDishCard: HTMLElement;
    let featuredLeaderCard: HTMLElement;
    let featuredPromotionCard: HTMLElement;


    featuredDishCard = fixture.debugElement.nativeElement;
    featuredLeaderCard = fixture.debugElement.nativeElement;
    featuredPromotionCard = fixture.debugElement.nativeElement;

    // [Retrospect]: innerText null error is caused by the # prefix in html id tag in template (typo)
    featuredDishCard = featuredDishCard.querySelector('#featured-dish-header');
    // console.log(featured[0].name);
    expect(featuredDishCard.innerText).toBe(featured[0].name.toUpperCase());

    featuredLeaderCard = featuredLeaderCard.querySelector('#featured-leader-header');
    // console.log(featured[0].name);
    expect(featuredLeaderCard.innerText).toBe(featured[1].name.toUpperCase());

    featuredPromotionCard = featuredPromotionCard.querySelector('#featured-promotion-header');
    // console.log(featured[0].name);
    expect(featuredPromotionCard.innerText).toBe(featured[2].name.toUpperCase());


  })

  // Third test: Home Component should have 3 featured cards descriptions
  it('Featured card elements should have 3 featured description', () => {
    let featuredDishCard: HTMLElement;
    let featuredLeaderCard: HTMLElement;
    let featuredPromotionCard: HTMLElement;

    fixture.detectChanges();

    // featuredCard = fixture.debugElement.nativeElement.querySelector('#featured-dish');
    featuredDishCard = fixture.debugElement.nativeElement;
    featuredLeaderCard = fixture.debugElement.nativeElement;
    featuredPromotionCard = fixture.debugElement.nativeElement;

    // console.log(featured[0].description);
    // console.log(featured[1].description);
    // console.log(featured[2].description);

    featuredDishCard = featuredDishCard.querySelector('#featured-dish-description');
    expect(featuredDishCard.innerText).toBe(featured[0].description);

    featuredLeaderCard = featuredLeaderCard.querySelector('#featured-leader-description');
    expect(featuredLeaderCard.innerText).toBe(featured[1].description);

    featuredPromotionCard = featuredPromotionCard.querySelector('#featured-promotion-description');
    expect(featuredPromotionCard.innerText).toBe(featured[2].description);

  })

  // Fourth test: Home Component should have 3 featured card elements in total
  it('Featured cards should be 3 in total', () => {

    // let featuredCards: HTMLElement[];
    let featuredCards: DebugElement[];

    // Find all mat-card elements found in Home Component (returns array)
    featuredCards = fixture.debugElement.queryAll(By.css('mat-card'));

    // console.log("featureCards:",featuredCards.length);

    // Expect array of mat-card elements found to be 3
    expect(featuredCards.length).toBe(3);


  })

});
