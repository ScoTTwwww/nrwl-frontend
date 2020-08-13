import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { map, exhaustMap, catchError, tap, switchMap } from 'rxjs/operators';

import {
  LoginSuccessAction,
  AuthActionTypes,
  LoginAction
} from './auth.actions';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    switchMap((action: LoginAction) => {
      console.log(action.payload);

      return [ new LoginSuccessAction(action.payload)]
    })
  );

  constructor(
    private actions$: Actions
  ) {}
}
