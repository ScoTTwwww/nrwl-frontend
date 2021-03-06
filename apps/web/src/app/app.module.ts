import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { CommonSharedModule } from '@frontend/common/shared';
import { WebCoreModule } from '@frontend/web/core';
import { CommonAuthStateModule } from '@frontend/common/auth/state';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WebSettingModule } from '@frontend/web/setting';
import { CommonMaterialModule } from '@frontend/common/material';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '',
    loadChildren: () => import('@frontend/web/app').then(m => m.WebAppModule),
  },
  {
    path: 'login',
    loadChildren: () => import('@frontend/web/login').then(m => m.WebLoginModule),
  }
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    WebCoreModule,
    CommonSharedModule,
    CommonAuthStateModule,
    CommonMaterialModule,
    BrowserAnimationsModule,
    WebSettingModule,
    StoreDevtoolsModule.instrument(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
