import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@frontend/common/auth/state';
import { LoginBaseComponent } from '@frontend/common/shared';
import { Router } from '@angular/router';
import { AuthService } from '@frontend/common/auth/shared';
import { take } from 'rxjs/operators';

@Component({
  selector: 'web-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends LoginBaseComponent implements OnInit {
  user$ = this.authFacade.user$;

  visitUser = {userId: "scott666", password: "scott666" };

  constructor(
    private authFacade: AuthFacade,
    private authService: AuthService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
  }

  async send(formValue: any) {
    /*   super.login().subscribe( async result=> {

       const user = await this.authService.login(result.data).toPromise();
       console.log('-------',user)

         if(user){
          this.authFacade.login(result.data);
          this.router.navigate(['home']);
          localStorage.setItem('token', user.access_token);
          console.log(user)
         }else {
           alert("ERROR")
         }

      }); */

    // const user = await this.authService.login(this.formGroup.value).toPromise();

    const value = formValue ? formValue : this.formGroup.value;
    this.authFacade.login(value).
      pipe(take(1))
      .subscribe(result => {
        if (result) {
          const { id, userId, token } = result;

          this.router.navigate(['home']);
          console.log("11111111111111", result)
          sessionStorage.setItem('id', id);
          sessionStorage.setItem('userId', userId);
          sessionStorage.setItem('token', token);
        } else {
          alert("error Login")
        }
      })
  }
}
