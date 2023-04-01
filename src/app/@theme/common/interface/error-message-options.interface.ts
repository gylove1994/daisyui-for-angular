import { FormGroup } from '@angular/forms';

export interface ErrorMessageOptions {
  formGroup: FormGroup;
  path: string;
  errorCode: string;
  message: string;
  skipDirty?: boolean;
}
