import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthFacade } from '@frontend/common/auth/state';

@Component({
  selector: 'web-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user$: Observable<any>;

  constructor(
    private authFacade: AuthFacade
  ) {
    this.user$ = this.authFacade.user$;
  }

  ngOnInit() {
  }

}
