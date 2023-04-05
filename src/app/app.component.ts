import { NgDaisyuiModalService } from './@theme/ng-daisyui-modal/ng-daisyui-modal.service';
import { NgDaisyuiToastService } from './@theme/ng-daisyui-toast/ng-daisyui-toast.service';
import { InputUtilsService } from './@theme/ng-daisyui-input/input-utils.service';
import { BehaviorSubject, interval, map, pairwise, filter, tap } from 'rxjs';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly inputUtilsService:InputUtilsService,
    private readonly toastService:NgDaisyuiToastService,
    private readonly modalService:NgDaisyuiModalService
  ){}

  @ViewChild('modal',{static:true})
  modal!: TemplateRef<HTMLDivElement>;

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

  async onSubmit() {
    this.inputUtilsService.markAllAsDirtyAndTouched(this.formGroup);
    await this.toastService.show('Hello World!','info',3000);
    await this.modalService.open(this.modal,{close:this.modalService.getCloseFunction()});
  }

  close = this.modalService.getCloseFunction();
}
