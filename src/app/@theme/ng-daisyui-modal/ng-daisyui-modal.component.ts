import { NgDaisyuiModalService } from './ng-daisyui-modal.service';
import { Component, OnInit, AfterViewInit, Renderer2, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'ng-daisyui-modal',
  templateUrl: './ng-daisyui-modal.component.html',
  styleUrls: ['./ng-daisyui-modal.component.css']
})
export class NgDaisyuiModalComponent implements AfterViewInit {

  constructor(public readonly renderer2:Renderer2,public readonly viewContainerRef:ViewContainerRef) { }

  @ViewChild('modal',{static:true})
  modal!: ElementRef<HTMLDivElement>;

  @ViewChild('open_modal',{static:true})
  openModal!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit(): void {
    NgDaisyuiModalService.init(this);
  }

}
