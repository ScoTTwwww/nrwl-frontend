import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  AUTH_FEATURE_KEY,
  initialState as authInitialState,
  authReducer
} from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { AuthFacade } from './+state/auth.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer, {
      initialState: authInitialState
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthFacade]
})
export class CommonAuthStateModule {}
