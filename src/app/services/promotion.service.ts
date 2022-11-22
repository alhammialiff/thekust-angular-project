import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMesgService } from './process-httpmesg.service';



@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
    private processHTTPMesgService: ProcessHTTPMesgService) { }

  getPromotions(): Observable<Promotion[]> {
    // [Using native JS Promise]
    // return Promise.resolve(PROMOTIONS);
    // return new Promise((resolve)=>{
    //   setTimeout(()=>{
    //     resolve(PROMOTIONS);
    //   },2000);
    // });

    // [Using RxJS observable]
    // return of(PROMOTIONS).pipe(delay(2000));
    return this.http.get<Promotion[]>(baseURL + 'promotions')
      .pipe(catchError(this.processHTTPMesgService.handleError));
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
    // return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));
    return this.http.get<Promotion>(baseURL + 'promotions' + id)
      .pipe(catchError(this.processHTTPMesgService.handleError));
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
    // return of(PROMOTIONS.filter((promo) => promo.featured)[0]).pipe(delay(2000));
    return this.http
      .get<Promotion>(baseURL + 'promotions?featured=true')
      .pipe(map(promotions => promotions[0]))
      .pipe(catchError(this.processHTTPMesgService.handleError));


  }

}
