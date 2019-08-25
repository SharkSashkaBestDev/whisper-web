import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Tweet} from './models/tweet.model';

@Injectable({ providedIn: 'root' })
export class WhisperDataService {

  private tweetsCountSubject = new Subject<number>();

  sendTweets(wrapper: number) {
    this.tweetsCountSubject.next(wrapper);
    console.log('data populated');
  }

  clearTweets() {
    this.tweetsCountSubject.next();
  }

  getTweets(): Observable<number> {
    console.log('subscribed');
    return this.tweetsCountSubject.asObservable();
  }

}
