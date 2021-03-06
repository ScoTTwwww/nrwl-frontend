import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSharedModule, AuthGuard } from '@frontend/common/shared';
import { AppComponent } from './app/app.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonMaterialModule } from '@frontend/common/material';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user'
      },
      {
        path: 'home',
        loadChildren: () => import('@frontend/web/home').then(m => m.WebHomeModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'user',
        loadChildren: () => import('@frontend/web/user').then(m => m.WebUserModule),
        canLoad: [AuthGuard]
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
    CommonMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppComponent]
})
export class WebAppModule { }
