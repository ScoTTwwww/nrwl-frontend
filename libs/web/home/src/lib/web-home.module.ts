import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonMaterialModule } from '@frontend/common/material';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class WebHomeModule {}
