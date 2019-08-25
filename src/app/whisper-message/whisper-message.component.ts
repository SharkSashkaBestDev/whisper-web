import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {showHide} from '../animations';
import {WhisperDataService} from '../whisper-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'whisper-message',
  templateUrl: './whisper-message.component.html',
  styleUrls: ['./whisper-message.component.scss'],
  animations: [
    showHide
  ]
})
export class WhisperMessageComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() text: string;
  @Input() index: number;

  showing = 'hide';
  timeout = 3500;
  tweetsCount: number;

  dataServiceSubscription: Subscription;

  constructor(private dataService: WhisperDataService) {}

  ngOnInit() {
    this.dataServiceSubscription =  this.dataService.getTweets().subscribe(tweetsCount => {
      this.tweetsCount = tweetsCount;
    });

    setTimeout(async () => {
      setTimeout(async () => { this.showing = 'show'; }, (this.index) * this.timeout);
      setTimeout(async () => { this.showing = 'hide'; }, (this.index) * this.timeout + this.timeout);

      setInterval(() => {
        setTimeout(async () => { this.showing = 'show'; }, (this.index) * this.timeout);
        setTimeout(async () => { this.showing = 'hide'; }, (this.index) * this.timeout + this.timeout);
      }, this.timeout * this.tweetsCount);
    }, 30);
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.dataServiceSubscription.unsubscribe();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
