import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@frontend/common/auth/state';
import { LoginBaseComponent } from '@frontend/common/shared';
import { Router } from '@angular/router';
import { AuthService } from '@frontend/common/auth/shared';

@Component({
  selector: 'web-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends LoginBaseComponent implements OnInit {
  user$ = this.authFacade.user$;

  constructor(
   private authFacade: AuthFacade,
   private authService: AuthService,
   private router: Router
  ) {
    super();
   }

  ngOnInit() {
  }

   send() {
    super.login().subscribe( async result=> {

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

    });
  }
}
