import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutoriaPageComponent } from './tutoria-page/tutoria-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    TutoriaPageComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    TutoriaPageComponent
  ]
})
export class ReporteModule { }
