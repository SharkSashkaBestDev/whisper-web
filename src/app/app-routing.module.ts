import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WhisperMainComponent} from './whisper-main/whisper-main.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: WhisperMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
