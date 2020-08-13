import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@frontend/ionic/app').then(m => m.IonicAppModule),
  }
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
export class AppModule {}
