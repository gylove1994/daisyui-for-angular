import { Component, ElementRef, forwardRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, filter, interval, map, Observable, pairwise } from 'rxjs';
import { BaseInputComponent, customInputAccessor } from '../common/components/base-input.component';
import { InputUtilsService } from './input-utils.service';

@Component({
  selector: 'ng-daisyui-input',
  templateUrl: './ng-daisyui-input.component.html',
  providers: [customInputAccessor(NgDaisyuiInputComponent),InputUtilsService]
})
export class NgDaisyuiInputComponent implements OnInit,ControlValueAccessor {

  formControlDirective: any;
  ngClass: string[] = [];
  value: string = '';

  onChange: (val: any) => void = () => {};

  onBlur: (event?: any) => void = () => {};

  @ViewChild('input',{static:true}) input!: ElementRef<HTMLInputElement>;

  constructor(private readonly inputUtilsService:InputUtilsService) {}

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if(isDisabled){
      this.input.nativeElement.disabled = true;
    }else{
      this.input.nativeElement.disabled = false;
    }
  }

  @Input()
  errorMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');

  @Input()
  label?: string;

  @Input()
  placeholder?: string;

  @Input()
  type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' = 'text';

  @Input()
  formName: string = '';

  ngOnInit(): void {
    this.inputUtilsService.watchObservableBuilder(this,'value').subscribe((val)=>{
      this.onChange(val);
    });
  }

}
