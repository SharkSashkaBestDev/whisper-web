import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {WhisperHeaderComponent} from './whisper-header/whisper-header.component';
import {WhisperMainComponent} from './whisper-main/whisper-main.component';

@NgModule({
  declarations: [
    AppComponent,
    WhisperHeaderComponent,
    WhisperMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
