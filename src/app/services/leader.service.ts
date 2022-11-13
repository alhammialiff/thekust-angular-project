import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  leaders: Promise<Leader[]>;

  constructor() { }

  getLeaders(){
    return Promise.resolve(LEADERS);
  }

  getFeaturedLeader(){
    return Promise.resolve(LEADERS.filter(leader => leader.featured)[0]);
  }

}
