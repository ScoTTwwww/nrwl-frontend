import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogOverviewExampleDialog, UserComponent } from './user/user.component';
import { CommonMaterialModule } from '@frontend/common/material';
import { CommonUserModule } from '@frontend/common/user';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,
    CommonUserModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserComponent, DialogOverviewExampleDialog]
})
export class WebUserModule {}
