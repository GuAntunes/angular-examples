import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampoControlComponent } from './campo-control/campo-control.component';
import { FormDebugComponent } from './form-debug/form-debug.component';



@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormDebugComponent,
    CampoControlComponent
  ]
})
export class SharedModule { }
