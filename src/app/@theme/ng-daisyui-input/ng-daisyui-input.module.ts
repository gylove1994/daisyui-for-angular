import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDaisyuiInputComponent } from './ng-daisyui-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgDaisyuiInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [NgDaisyuiInputComponent]
})
export class NgDaisyuiInputModule { }
