import { CommonSharedModule } from '@frontend/common/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicCoreModule } from '@frontend/ionic/core';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
]


@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
    IonicCoreModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class IonicLoginModule {}
