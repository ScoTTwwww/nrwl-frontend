import { AuthAction, AuthActionTypes } from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

/**
 * Interface for the 'Auth' data used in
 *  - AuthState, and
 *  - authReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */

export interface User {
  id?: string;
  userId?: string;
  name?: string;
  token?: string;
  password?: string;
}
export interface AuthData {
  user: User;
}

/**
 * Interface to the part of the Store containing AuthState
 * and other information related to AuthData.
 */
export interface AuthState {
  readonly auth: AuthData;
}

export const initialState: AuthData = {
  user: null
};

export function authReducer(
  state = initialState,
  action: AuthAction
): AuthData {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        user: action.payload
      }
    case AuthActionTypes.LoginFail:

      return {
        ...state,
        user: null
      };


      case AuthActionTypes.Logout: {
        return {
          ...state,
          user: null
        };
      }

    default:
      return state;
  }

}
