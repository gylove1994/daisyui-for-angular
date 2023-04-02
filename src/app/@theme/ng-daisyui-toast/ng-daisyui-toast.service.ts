import { NgDaisyuiToastComponent } from './ng-daisyui-toast.component';
import { ViewContainerRef,Injectable, Injector, ApplicationRef, ViewRef, TemplateRef, Renderer2, createComponent, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgDaisyuiToastService {
  static toast: ElementRef<HTMLDivElement>;
  static info: ElementRef<HTMLDivElement>;
  static success: ElementRef<HTMLDivElement>;
  static warning: ElementRef<HTMLDivElement>;
  static error: ElementRef<HTMLDivElement>;
  static renderer2: Renderer2;

  constructor(private readonly applicationRef:ApplicationRef){
    const viewContainerRef = createComponent(NgDaisyuiToastComponent,{
      environmentInjector: applicationRef.injector,
    });
    applicationRef.attachView(viewContainerRef.hostView);
  }

  static _initFinished = false;

  static async initFinished(){
    return await new Promise((resolve) => {
      while(!this._initFinished){
        console.log('Waiting for NgDaisyuiToastService to initialize...');
      }
      resolve(true);
    });
  }

  static init(component:NgDaisyuiToastComponent){
    if(this._initFinished) return;
    this.toast = component.toast;
    this.info = component.info;
    this.success = component.success;
    this.warning = component.warning;
    this.error = component.error;
    this.renderer2 = component.renderer2;
    const toast = NgDaisyuiToastService.toast.nativeElement.cloneNode(true) as HTMLDivElement;
    NgDaisyuiToastService.renderer2.appendChild(document.body, toast);
    this._initFinished = true;
  }

  async show(message:string, type: 'info' | 'success' | 'warning' | 'error' = 'info', duration = 3000) {
    if(!(await NgDaisyuiToastService.initFinished())) return;
    const host = document.querySelector('.toast') as HTMLDivElement;
    const toast = NgDaisyuiToastService[type].nativeElement.cloneNode(true) as HTMLDivElement;
    const toastMessage = toast.querySelector('.toast-message') as HTMLDivElement;
    toastMessage.innerText = message;
    NgDaisyuiToastService.renderer2.appendChild(host, toast);
    setTimeout(() => {
      NgDaisyuiToastService.renderer2.removeChild(host, toast);
    }, duration);
  }

}
