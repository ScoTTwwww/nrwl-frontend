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

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@frontend/web/app').then(m => m.WebAppModule),
  }
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WebCoreModule,
    CommonSharedModule,
    CommonAuthStateModule,
    BrowserAnimationsModule,

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
