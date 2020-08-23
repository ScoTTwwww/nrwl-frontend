import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSharedModule, AuthGuard } from '@frontend/common/shared';
import { AppComponent } from './app/app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('@frontend/web/home').then(m => m.WebHomeModule),
        canLoad: [AuthGuard]
      }
    ]
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
export class WebAppModule { }
