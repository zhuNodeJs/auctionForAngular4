import { FormControl } from '@angular/forms';

export function positiveNumberValidator(control: FormControl): any {
  if (!control.value) {
    return null;
  }
  let price = parseInt(control.value);
  if (price < 0) {
    return {positiveNumber: true};
  } else {
    return null;
  }
}
