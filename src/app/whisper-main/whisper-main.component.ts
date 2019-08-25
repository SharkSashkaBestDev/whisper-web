import { Component, OnInit } from '@angular/core';
import {Tweet} from '../models/tweet.model';
import {WhisperDataService} from '../whisper-data.service';

@Component({
  selector: 'whisper-main',
  templateUrl: './whisper-main.component.html',
  styleUrls: ['./whisper-main.component.scss']
})
export class WhisperMainComponent implements OnInit {

  tweets = [
    new Tweet('1', 'Hello world 1', null),
    new Tweet('2', 'Hello world 2', null),
    new Tweet('3', 'Hello world 3', null),
    new Tweet('4', 'Hello world 4', null),
  ];

  constructor(private dataService: WhisperDataService) { }

  ngOnInit() {
    setTimeout(() => {
      this.dataService.sendTweets(this.tweets.length);
    }, 20);
  }

}
