import { FormGroup } from '@angular/forms';
import { BehaviorSubject, filter, interval, map, Observable, pairwise } from 'rxjs';
import { Injectable } from "@angular/core";
import { ErrorMessageOptions } from '../common/interface/error-message-options.interface';

@Injectable()
export class InputUtilsService {
  private inter = interval(10);

  errorMessageBuilder(errorMessageOptions:ErrorMessageOptions){
    const errorMessage = new BehaviorSubject('');
    this.inter.pipe(
      map(()=>errorMessageOptions.formGroup.getError(errorMessageOptions.errorCode,errorMessageOptions.path))
      ).subscribe((val)=>{
      if(val && errorMessageOptions.formGroup.get(errorMessageOptions.path)?.touched && (errorMessageOptions.formGroup.get(errorMessageOptions.path)?.dirty || errorMessageOptions.skipDirty)){
        errorMessage.next(errorMessageOptions.message);
      }else{
        errorMessage.next('');
      }
    })
    return errorMessage;
  }

  markAllAsDirtyAndTouched(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach((key) => {
      if(formGroup.controls[key] instanceof FormGroup) {
        this.markAllAsDirtyAndTouched(formGroup.controls[key] as FormGroup);
      }else{
        formGroup.controls[key].markAsTouched();
        formGroup.controls[key].markAsDirty();
      }
    });
  }

  clearAllDirtyAndTouched(formGroup:FormGroup) {
    formGroup.markAsPristine();
    formGroup.markAsUntouched();
  }

  watchObservableBuilder<T,K extends keyof T>(targetThis:T,targetKey:K):Observable<T[K]> {
    return this.inter.pipe(map(()=>targetThis[targetKey]),pairwise(),filter((val:any[])=>val[0] !== val[1]),map((val:any)=>val[1]));
  }

}
