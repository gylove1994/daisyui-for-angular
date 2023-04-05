import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDaisyuiModalComponent } from './ng-daisyui-modal.component';
import { NgDaisyuiModalService } from './ng-daisyui-modal.service';



@NgModule({
  declarations: [
    NgDaisyuiModalComponent
  ],
  imports: [
    CommonModule
  ],
})
export class NgDaisyuiModalModule {
  static forRoot(): ModuleWithProviders<NgDaisyuiModalModule> {
    return {
      ngModule: NgDaisyuiModalModule,
      providers: [NgDaisyuiModalService],
    };
  }
}
