import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  // leaders: Promise<Leader[]>;

  constructor() { }

  getLeaders(): Observable<Leader[]>{
    // return Promise.resolve(LEADERS);
    // return new Promise((resolve)=>{
    //   setTimeout(()=>{
    //     resolve(LEADERS)
    //   },2000);
    // });

    // [Using RxJS observable]
    return of(LEADERS).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<Leader>{
    // return Promise.resolve(LEADERS.filter(leader => leader.featured)[0]);
    // return new Promise((resolve)=>{
    //   setTimeout(()=>{
    //     resolve(LEADERS.filter(leader => leader.featured)[0])
    //   },2000);
    // });

    // [Using RxJS observable]
    return of(LEADERS.filter(leader => leader.featured)[0]).pipe(delay(2000));

  }

}
