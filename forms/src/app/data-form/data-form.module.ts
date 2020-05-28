import { SharedModule } from './../shared/shared.module';
import { DataFormComponent } from './data-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DataFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DataFormModule { }
