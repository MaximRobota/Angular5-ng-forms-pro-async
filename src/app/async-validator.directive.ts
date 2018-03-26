import {Directive, forwardRef} from '@angular/core';
import {FormControl, Validator, NG_ASYNC_VALIDATORS} from '@angular/forms';

function AsyncValidator(c: FormControl): Promise<{[key: string]: boolean}> {
  console.log('async');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (c.value === 'Kiev') {
        resolve(null);
      } else {
        resolve({ wrongCity: true });
      }
    }, 3000);
  });
}

@Directive({
  selector: '[asyncValidator][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => AsyncValidatorDirective),
      multi: true
    }
  ]
})
export class AsyncValidatorDirective implements Validator {
  validate(c: FormControl) {
    return AsyncValidator(c);
  }
}
