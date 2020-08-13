import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@frontend/common/auth/state';

@Component({
  selector: 'web-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user$ = this.authFacade.user$;
  constructor(
   private authFacade: AuthFacade
  ) { }

  ngOnInit() {
  }

  send() {
    this.authFacade.login({ id: "1231", name: "scott" })
  }
}
