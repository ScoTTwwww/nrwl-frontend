import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '@frontend/common/shared';
import { AppComponent } from './app/app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppComponent]
})
export class WebAppModule {}
