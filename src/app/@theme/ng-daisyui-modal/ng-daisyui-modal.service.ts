import { Injectable, ApplicationRef, createComponent, ElementRef, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgDaisyuiModalComponent } from './ng-daisyui-modal.component';

@Injectable()
export class NgDaisyuiModalService {
  constructor(private readonly applicationRef:ApplicationRef) {
    const componentRef = createComponent(NgDaisyuiModalComponent,{
      environmentInjector: applicationRef.injector,
    });
    applicationRef.attachView(componentRef.hostView);

  }

  countForModalTriggerTimes = 0;

  get isOpened(){
    return this.countForModalTriggerTimes % 2 === 1;
  }

  get isClosed(){
    return this.countForModalTriggerTimes % 2 === 0;
  }

  static _initFinished = false;

  static viewContainerRef: ViewContainerRef;

  static modal: ElementRef;

  static openModalRef: ElementRef;

  static openModalHtml: HTMLDivElement;

  static modalHtml: HTMLInputElement;

  static renderer2:Renderer2;

  static async initFinished(){
    return await new Promise((resolve) => {
      while(!this._initFinished){
        console.log('Waiting for NgDaisyuiModalService to initialize...');
      }
      resolve(true);
    });
  }

  static init(component:NgDaisyuiModalComponent){
    if(this._initFinished) return;
    this.modal = component.modal;
    this.openModalRef = component.openModal;
    this.renderer2 = component.renderer2;
    this.viewContainerRef = component.viewContainerRef;
    this.modalHtml = NgDaisyuiModalService.modal.nativeElement.cloneNode(true) as HTMLInputElement;
    this.renderer2.appendChild(document.body.parentNode, this.modalHtml);
    this.openModalHtml = this.openModalRef.nativeElement.cloneNode(true) as HTMLDivElement;
    this.renderer2.appendChild(document.body.parentNode, this.openModalHtml);
    this._initFinished = true;
  }

  async open(templateRef:TemplateRef<HTMLDivElement>,ctx?: any){
    if(!(await NgDaisyuiModalService.initFinished())) return;
    console.log(this.isOpened);
    if(this.isOpened){
      return;
    }else{
      this.countForModalTriggerTimes++;
      const embeddedViewRef = NgDaisyuiModalService.viewContainerRef.createEmbeddedView(templateRef,ctx);
      embeddedViewRef.rootNodes[0].id = 'modal_inner';
      document.querySelector('#modal_inner')?.remove();
      document.body.parentNode?.querySelector('.modal-box')?.appendChild(embeddedViewRef.rootNodes[0]);
      (document.querySelector('#my-modal') as HTMLInputElement).click();
    }
  }

  async close(){
    if(!(await NgDaisyuiModalService.initFinished())) return;
    if(this.isClosed){
      return;
    }else{
      this.countForModalTriggerTimes++;
      (document.querySelector('#my-modal') as HTMLInputElement).click();
    }
  }

  getCloseFunction(){
    const t = this;
    return function(){
      t.close();
    }
  }

}
