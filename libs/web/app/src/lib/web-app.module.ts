import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '@frontend/common/shared';
import { AppComponent } from './app/app.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
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
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppComponent]
})
export class WebAppModule {}
