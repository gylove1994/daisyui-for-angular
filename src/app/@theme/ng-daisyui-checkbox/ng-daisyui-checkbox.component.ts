import { InputUtilsService } from './../common/services/input-utils.service';
import { ControlValueAccessor } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { customInputAccessor } from '../common/components/base-input.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ng-daisyui-checkbox',
  templateUrl: './ng-daisyui-checkbox.component.html',
  styleUrls: ['./ng-daisyui-checkbox.component.css'],
  providers: [customInputAccessor(NgDaisyuiCheckboxComponent),InputUtilsService],
})
export class NgDaisyuiCheckboxComponent implements OnInit,AfterViewInit,ControlValueAccessor {

  @Input()
  label?: string;

  @ViewChild('input',{static:true})
  input!: ElementRef<HTMLInputElement>;

  @ViewChild('labeled_input',{static:true})
  labeledInput!: ElementRef<HTMLInputElement>;

  value!: boolean;

  @Input()
  errorMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');

  onChange: (val:any) => void = ()=>{};

  onTouch: (event?: any) => void = ()=>{};

  constructor(private readonly inputUtilsService:InputUtilsService) { }

  ngAfterViewInit(): void {

  }
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  onBlur(){
    this.onTouch();
  }
  setDisabledState?(isDisabled: boolean): void {
    if(isDisabled && this.input){
      this.input.nativeElement.disabled = true;
    }else if(this.input){
      this.input.nativeElement.disabled = false;
    }
    if(isDisabled && this.labeledInput){
      this.labeledInput.nativeElement.disabled = true;
    }else if(this.labeledInput){
      this.labeledInput.nativeElement.disabled = false;
    }
  }

  ngOnInit(): void {
    this.inputUtilsService.watchObservableBuilder(this,'value').subscribe((val)=>{
      this.onChange(val);
    });
  }

}
