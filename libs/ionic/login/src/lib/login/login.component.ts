import { Component, OnInit } from '@angular/core';
import { LoginBaseComponent } from '@frontend/common/shared';
import { AuthFacade } from '@frontend/common/auth/state';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ionic-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends LoginBaseComponent implements OnInit {

  constructor(

  ) {
  super();
  }

  ngOnInit() {
  }

}
