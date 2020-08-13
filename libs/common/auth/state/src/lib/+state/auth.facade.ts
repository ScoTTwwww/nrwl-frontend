import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoginAction } from './auth.actions';
import { getUser } from './auth.selectors';


@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  user$ = this.store.pipe(select(getUser));

  constructor(
    private store: Store<any>,
  ) {}

  login(authenticate) {
    this.store.dispatch(new LoginAction(authenticate));
  }
}
