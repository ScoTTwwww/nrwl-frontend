import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthData } from './auth.reducer';

const getAuthState = createFeatureSelector<AuthData>(AUTH_FEATURE_KEY);
export const getUser = createSelector(getAuthState, state => state.user);
