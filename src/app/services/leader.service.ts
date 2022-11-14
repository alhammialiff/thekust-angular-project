import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  // leaders: Promise<Leader[]>;

  constructor() { }

  getLeaders(): Promise<Leader[]>{
    // return Promise.resolve(LEADERS);
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(LEADERS)
      },2000);
    });
  }

  getFeaturedLeader(): Promise<Leader>{
    // return Promise.resolve(LEADERS.filter(leader => leader.featured)[0]);
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(LEADERS.filter(leader => leader.featured)[0])
      },2000);
    });
  }

}
