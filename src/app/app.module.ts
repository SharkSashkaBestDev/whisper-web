import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {WhisperHeaderComponent} from './whisper-header/whisper-header.component';
import {WhisperMainComponent} from './whisper-main/whisper-main.component';
import {WhisperMessageComponent} from './whisper-message/whisper-message.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WhisperDataService} from './whisper-data.service';

@NgModule({
  declarations: [
    AppComponent,
    WhisperHeaderComponent,
    WhisperMainComponent,
    WhisperMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [WhisperDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
