import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonSharedModule } from '@frontend/common/shared';
import { IonicModule } from '@ionic/angular';
const routes: Routes = [
  {
    path: '',
    component: AppComponent,

  }
]


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CommonSharedModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppComponent]
})
export class IonicAppModule { }
