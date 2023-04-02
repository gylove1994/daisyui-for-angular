import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDaisyuiInputComponent } from './ng-daisyui-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputUtilsService } from './input-utils.service';



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
export class NgDaisyuiInputModule {
  static forRoot(): ModuleWithProviders<NgDaisyuiInputModule> {
    return {
      ngModule: NgDaisyuiInputModule,
      providers: [InputUtilsService],
    };
  }
}
