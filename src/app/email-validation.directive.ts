import {Directive, forwardRef} from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

function EmailValidator(c: FormControl) {
  const EMAIL_REGEXP = new RegExp('\\S+@\\S+\\.\\S+');
  return EMAIL_REGEXP.test(c.value) ? null : { 'invalidEmail': true };
}

@Directive({
  selector: '[emailValidation][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidationDirective),
      multi: true
    }
  ]
})
export class EmailValidationDirective implements Validator {
  validate(c: FormControl) {
    return EmailValidator(c);
  }
}
