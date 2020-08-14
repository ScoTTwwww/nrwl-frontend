import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';


export class PasswordValidator {
  static isValid(minLength: number, maxLength: number): ValidatorFn {

    return (control: AbstractControl): ValidationErrors => {
      const v: any = control.value;

      if ((!v) || (v && v.trim() === '')) return { required: true };
      if (v.length < minLength || v.length > maxLength)
        return {
          length: {
            requireMinLength: minLength,
            requireMaxLength: maxLength,
            actualLength: v.length
          }
        };

      return null;
    };
  }

}

export class Custom {
 static password(control: AbstractControl): ValidationErrors | null {
    const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;
    return pattern.test(control.value) ? null : { 'password': true };
  }

}
