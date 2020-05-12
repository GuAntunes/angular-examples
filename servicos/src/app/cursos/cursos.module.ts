import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CursosService
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
