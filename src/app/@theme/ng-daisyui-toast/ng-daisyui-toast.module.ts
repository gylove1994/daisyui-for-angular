import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDaisyuiToastComponent } from './ng-daisyui-toast.component';
import { NgDaisyuiToastService } from './ng-daisyui-toast.service';

@NgModule({
  declarations: [NgDaisyuiToastComponent],
  imports: [CommonModule],
  exports: [NgDaisyuiToastComponent],
  bootstrap: [NgDaisyuiToastComponent]
})
export class NgDaisyuiToastModule {
  static forRoot(): ModuleWithProviders<NgDaisyuiToastModule> {
    return {
      ngModule: NgDaisyuiToastModule,
      providers: [NgDaisyuiToastService],
    };
  }
}
