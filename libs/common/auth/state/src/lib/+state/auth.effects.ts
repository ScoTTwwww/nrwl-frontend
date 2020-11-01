import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AuthService } from '@frontend/common/auth/shared';
import { map, exhaustMap, catchError, tap, switchMap, take } from 'rxjs/operators';

import {
  LoginSuccessAction,
  AuthActionTypes,
  LoginAction,
  LoginFailAction
} from './auth.actions';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    switchMap((action: LoginAction) => {
      console.log("Effect Action: ", action.payload);
      return this.authService.login(action.payload).pipe(
        map(res => {
          const { _id, userId } = res.userInfo;
          const access_token = res.access_token;

          const user = {
            id: _id,
            userId: userId,
            token: access_token
          }

          return new LoginSuccessAction(user);
        }),
        catchError((res) => of(new LoginFailAction()))
      )
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }
}
