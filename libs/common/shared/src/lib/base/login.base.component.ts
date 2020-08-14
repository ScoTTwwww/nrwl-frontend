import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthFacade } from "@frontend/common/auth/state";
import { take, filter } from "rxjs/operators";
import * as _ from 'lodash';
import { TranslateService } from "@ngx-translate/core";
import { FormBaseComponent } from './formBase.component';


export abstract class LoginBaseComponent extends FormBaseComponent {
  formGroup: FormGroup;

  constructor(

  ) {
    super();

    this. createFormGroup();
  }

  createFormGroup() {
    this.formGroup = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }
  );

  }
}
