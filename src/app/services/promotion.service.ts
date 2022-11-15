import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    // [Using native JS Promise]
    // return Promise.resolve(PROMOTIONS);
    // return new Promise((resolve)=>{
    //   setTimeout(()=>{
    //     resolve(PROMOTIONS);
    //   },2000);
    // });

    // [Using RxJS observable]
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: string): Observable<Promotion> {
    // [Using native JS Promise]
    // return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
    // return new Promise((resolve)=>{
    //   setTimeout(()=>{
    //     resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0])
    //   },2000);
    // });

    // [Using RxJS observable]
    return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));
  }

  // This will be used to display featured promo in Home
  getFeaturedPromotion(): Observable<Promotion> {
    // [Using native JS Promise]
    // return Promise.resolve(PROMOTIONS.filter((promo)=> promo.featured)[0]);
    // return new Promise((resolve)=>{
    //   setTimeout(()=>{
    //     resolve(PROMOTIONS.filter((promo)=> promo.featured)[0])
    //   }, 2000);
    // });

    // [Using RxJS observable]
    return of(PROMOTIONS.filter((promo) => promo.featured)[0]).pipe(delay(2000));


  }

}
