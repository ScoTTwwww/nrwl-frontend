import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonSharedModule } from '@frontend/common/shared';

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
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class WebLoginModule {}
