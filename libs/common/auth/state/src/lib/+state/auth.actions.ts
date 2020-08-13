import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
}
export class LoginAction implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: any) {}
}

export class LoginSuccessAction implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: any) {}
}

export type AuthAction = LoginAction | LoginSuccessAction ;
