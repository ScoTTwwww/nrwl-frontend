import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@frontend/common/auth/state';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'web-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$ = this.authFacade.user$;

  constructor(
    private authFacade: AuthFacade,
    private router: Router
  ) {
    this.get();
  }

  ngOnInit() {
  }


  get() {
     console.log(    localStorage.getItem('user'))
  }


  logout(){
    this.authFacade.logout().pipe(take(1)).subscribe(result=>{

      if(result){
        console.log("是否登出", result)
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('token');

        this.router.navigate(['login']);
      }

    })
  }
}
