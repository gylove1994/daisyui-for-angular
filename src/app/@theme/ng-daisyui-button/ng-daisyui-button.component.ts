import { NgDaisyUIColorType, NgDaisyUIButtonSizeType, NgDaisyUIButtonShapeType } from './../common/interface/color.type';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-daisyui-button',
  template: `<button class="btn" [ngClass]="classArray"><ng-content></ng-content></button>`
})
export class NgDaisyuiButtonComponent implements OnInit {

  constructor() { }

  public get classArray(): string[] {
    return [`btn-${this.color}`, this.ghost ? 'btn-ghost' : '', this.link ? 'btn-link' : '', this.outline ? 'btn-outline' : '', this.active ? 'btn-active' : '', this.disabled ? 'btn-disabled' : '', this.glass ? 'btn-glass' : '', this.loading ? 'btn-loading' : '', this.disableAnimation ? 'no-animation' : '', `btn-${this.size}`, this.shape ? `btn-${this.shape}` : ''];
  }

  @Input()
  color: NgDaisyUIColorType = 'primary';

  @Input()
  ghost: boolean = false;

  @Input()
  link: boolean = false;

  @Input()
  outline: boolean = false;

  @Input()
  active: boolean = false;

  @Input()
  disabled: boolean = false;

  @Input()
  glass: boolean = false;

  @Input()
  loading: boolean = false;

  @Input()
  disableAnimation: boolean = false;

  @Input()
  size: NgDaisyUIButtonSizeType = 'md';

  @Input()
  shape?: NgDaisyUIButtonShapeType;

  ngOnInit(): void {}

}
