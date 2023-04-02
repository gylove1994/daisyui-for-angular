import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeChangerService } from './services/theme-changer.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: []
})
export class NgDaisyUICommonModule {
  static forRoot(): ModuleWithProviders<NgDaisyUICommonModule> {
    return {
      ngModule: NgDaisyUICommonModule,
      providers: [ThemeChangerService],
    };
  }
}
