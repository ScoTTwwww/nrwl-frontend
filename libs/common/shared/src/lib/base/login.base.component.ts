import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthFacade } from "@frontend/common/auth/state";
import { take, filter } from "rxjs/operators";
import * as _ from 'lodash';
import { TranslateService } from "@ngx-translate/core";
import { FormBaseComponent } from './formBase.component';
import { PasswordValidator, Custom } from '../validators/password.validator';
import { of, Observable } from 'rxjs';


export abstract class LoginBaseComponent extends FormBaseComponent {
  formGroup: FormGroup;

  formErrors: any = {
    userId: [
      { type: 'required', message: '必填。' }
    ],
    password: [
      { type: 'required', message: '必填。' },
      { type: 'length', message: 'auth_register_error_password_length' },
      { type: 'password', message: '密碼必須六位數且包含英數字。' }
    ]
  };

  constructor(

  ) {
    super();

    this. createFormGroup();
  }

  createFormGroup() {
    this.formGroup = new FormGroup({
      userId: new FormControl('Test', [Validators.required]),
      password: new FormControl('Test123', [
        Validators.required,
   /*      PasswordValidator.isValid(4, 4), */
          Custom.password
      ])
    }
  );

  }


  login(): Observable<any> {
    if(this.formGroup.valid){
     return of({ status: 200 , data: this.formGroup.value})
    }
  }
}
