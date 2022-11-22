import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMesgService } from './process-httpmesg.service';




@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  // leaders: Promise<Leader[]>;

  constructor(private http: HttpClient,
    private processHttpMesgService: ProcessHTTPMesgService
    ) { }

  getLeaders(): Observable<Leader[]>{
    // return Promise.resolve(LEADERS);
    // return new Promise((resolve)=>{
    //   setTimeout(()=>{
    //     resolve(LEADERS)
    //   },2000);
    // });

    // [Using RxJS observable]
    // return of(LEADERS).pipe(delay(2000));

    return this.http.get<Leader[]>(baseURL + 'leadership')
      .pipe(catchError(this.processHttpMesgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader>{
    // return Promise.resolve(LEADERS.filter(leader => leader.featured)[0]);
    // return new Promise((resolve)=>{
    //   setTimeout(()=>{
    //     resolve(LEADERS.filter(leader => leader.featured)[0])
    //   },2000);
    // });

    // [Using RxJS observable]
    // return of(LEADERS.filter(leader => leader.featured)[0]).pipe(delay(2000));

    return this.http.get<Leader>(baseURL + 'leadership?featured=true')
      .pipe(map(leaders => leaders[0]))
      .pipe(catchError(this.processHttpMesgService.handleError));

  }

}
