import { InputUtilsService } from './@theme/common/services/input-utils.service';
import { BehaviorSubject, interval, map, pairwise, filter, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private readonly inputUtilsService:InputUtilsService){}
  ngOnInit(): void {}
  title = 'daisyui-for-angular';
  formGroup = new FormGroup({
    password: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    rememberMe: new FormControl(false,[Validators.requiredTrue]),
  });

  messageHandler = this.inputUtilsService.errorMessageBuilder({
    formGroup: this.formGroup,
    path: 'password',
    errorCode: 'required',
    message: 'Password is required',
  });

  rememberMe = this.inputUtilsService.errorMessageBuilder({
    formGroup: this.formGroup,
    path: 'rememberMe',
    errorCode: 'required',
    message: 'You must agree to the terms and conditions',
  });

  onSubmit() {
    this.inputUtilsService.markAllAsDirtyAndTouched(this.formGroup);
  }
}
