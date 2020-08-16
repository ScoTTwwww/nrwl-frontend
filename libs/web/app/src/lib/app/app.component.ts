import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@frontend/common/auth/state';

@Component({
  selector: 'web-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$ = this.authFacade.user$;

  constructor(
    private authFacade: AuthFacade,
  ) {
    this.get();
  }

  ngOnInit() {
  }


  get() {
     console.log(    localStorage.getItem('user'))
  }
}
