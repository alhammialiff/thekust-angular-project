import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMesgService } from './process-httpmesg.service';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  // feedback: Feedback;
  constructor(private http: HttpClient,
    private processHTTPMesgService: ProcessHTTPMesgService) { }

  submitFeedback(feedback: Feedback): Observable<Feedback>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    // Return HTTP Post Object 
    return this.http.post<Feedback>(baseURL + 'feedback', feedback, httpOptions)
      .pipe(catchError(this.processHTTPMesgService.handleError));
  }

}
