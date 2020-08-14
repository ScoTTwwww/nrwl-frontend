import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { LoginBaseComponent } from '@frontend/common/shared';
import { AuthFacade } from '@frontend/common/auth/state';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ionic-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends LoginBaseComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  super();
  }

  ngOnInit() {
  }

    xxx(): void {
    super.login().subscribe(result=> {
      console.log(result)
      this.router.navigate(['/tabs/home']);
    });
  }
}
