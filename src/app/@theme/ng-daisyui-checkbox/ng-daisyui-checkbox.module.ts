import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDaisyuiCheckboxComponent } from './ng-daisyui-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgDaisyuiCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NgDaisyuiCheckboxComponent]
})
export class NgDaisyuiCheckboxModule { }
