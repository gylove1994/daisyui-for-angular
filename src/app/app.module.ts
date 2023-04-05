import { NgDaisyuiModalModule } from './@theme/ng-daisyui-modal/ng-daisyui-modal.module';
import { NgDaisyuiToastModule } from './@theme/ng-daisyui-toast/ng-daisyui-toast.module';
import { NgDaisyuiCheckboxModule } from './@theme/ng-daisyui-checkbox/ng-daisyui-checkbox.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgDaisyuiInputModule } from './@theme/ng-daisyui-input/ng-daisyui-input.module';
import { NgDaisyuiCardModule } from './@theme/ng-daisyui-card/ng-daisyui-card.module';
import { NgDaisyuiButtonModule } from './@theme/ng-daisyui-button/ng-daisyui-button.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgDaisyuiModalModule.forRoot(),
    NgDaisyuiButtonModule,
    BrowserModule,
    AppRoutingModule,
    NgDaisyuiCardModule,
    NgDaisyuiInputModule.forRoot(),
    NgDaisyuiCheckboxModule,
    NgDaisyuiToastModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
