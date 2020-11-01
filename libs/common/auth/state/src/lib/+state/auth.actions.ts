import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFail = '[Auth] Login Fail',

  Logout = '[Auth] Logout',
}
export class LoginAction implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: any) {}
}

export class LoginSuccessAction implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: any) {}
}

export class LoginFailAction implements Action {
  readonly type = AuthActionTypes.LoginFail;
  constructor() {}
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.Logout;
  constructor( ) {}
}

export type AuthAction = LoginAction |
                         LoginSuccessAction |
                         LoginFailAction |
                         LogoutAction;
