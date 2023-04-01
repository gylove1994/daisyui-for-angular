import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-daisyui-card',
  templateUrl: './ng-daisyui-card.component.html',
})
export class NgDaisyuiCardComponent implements OnInit {

  @Input('title')
  title?: string;

  @Input('no-x-padding')
  paddingXNone: boolean = false;

  ngClass: string[] = ["p-3"];

  constructor() { }

  ngOnInit(): void {
    if(this.paddingXNone){
      this.ngClass = ["py-3"];
    }
  }

}
