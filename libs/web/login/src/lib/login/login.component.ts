import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@frontend/common/auth/state';
import { LoginBaseComponent } from '@frontend/common/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'web-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends LoginBaseComponent implements OnInit {
  user$ = this.authFacade.user$;

  constructor(
   private authFacade: AuthFacade,
   private router: Router
  ) {
    super();
   }

  ngOnInit() {
  }

  send() {
    super.login().subscribe(result=> {
      console.log(result)
      this.authFacade.login(result.data);
      this.router.navigate(['home']);
      localStorage.setItem('user', "OK");
    });
  }
}
