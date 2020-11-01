import { User } from './auth.reducer';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter, take } from 'rxjs/operators';
import { AuthActionTypes, LoginAction, LoginSuccessAction, LogoutAction } from './auth.actions';
import { getUser } from './auth.selectors';
import { Observable, of } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';


@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  user$ = this.store.pipe(select(getUser));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
  ) { }

  login(authenticate): Observable<any> {
    this.store.dispatch(new LoginAction(authenticate));

    return new Observable(observer => {

      this.actions$.pipe(
        ofType(
          AuthActionTypes.LoginSuccess,
          AuthActionTypes.LoginFail
        )
      ).subscribe(async (action: any) => {
        const user = await this.user$.pipe(take(1)).toPromise();
        console.log("login after", user)
        action.type === AuthActionTypes.LoginSuccess ? observer.next(user) : observer.next(false);

        observer.complete();
      })

    })
  }


  checkUser(user) {
    this.store.dispatch(new LoginSuccessAction(user));
  }

  logout(): Observable<any> {
    this.store.dispatch(new LogoutAction());

    return new Observable(observer => {
      this.user$.subscribe((user: any) => {
        observer.next(!user)
        observer.complete();
      })
    })
  }
}
