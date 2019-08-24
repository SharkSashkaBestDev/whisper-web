import {
  MatToolbarModule
} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
})
export class MaterialModule { }
