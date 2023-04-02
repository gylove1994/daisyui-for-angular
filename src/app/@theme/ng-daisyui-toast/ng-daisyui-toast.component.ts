import { NgDaisyuiToastService } from './ng-daisyui-toast.service';
import { Component, OnInit, Renderer2, TemplateRef, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'ng-daisyui-toast',
  templateUrl: './ng-daisyui-toast.component.html',
  styleUrls: ['./ng-daisyui-toast.component.css']
})
export class NgDaisyuiToastComponent implements AfterViewInit {
  constructor(public renderer2:Renderer2) {}

  ngAfterViewInit(): void {
    NgDaisyuiToastService.init(this);
  }

  @ViewChild('body',{static:true}) toast!: ElementRef<HTMLDivElement>;

  @ViewChild('info',{static:true}) info!: ElementRef<HTMLDivElement>;

  @ViewChild('success',{static:true}) success!: ElementRef<HTMLDivElement>;

  @ViewChild('warning',{static:true}) warning!: ElementRef<HTMLDivElement>;

  @ViewChild('error',{static:true}) error!: ElementRef<HTMLDivElement>;

}
