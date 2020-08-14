import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CommonSharedModule } from '@frontend/common/shared';
import { CommonAuthStateModule } from '@frontend/common/auth/state';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CommonCoreModule } from '@frontend/common/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { WebCoreModule } from '@frontend/web/core';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'tabs',
    loadChildren: () => import('@frontend/ionic/app').then(m => m.IonicAppModule),
  },
  {
    path: 'login',
    loadChildren: () => import('@frontend/ionic/login').then(m => m.IonicLoginModule),
  }

]

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonCoreModule,
    CommonSharedModule,
    CommonAuthStateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot({
      mode: 'ios',
      swipeBackEnabled: false,
      scrollPadding: false,
      scrollAssist: false
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
