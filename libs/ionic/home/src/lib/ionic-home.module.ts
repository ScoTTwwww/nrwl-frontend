import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

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
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class IonicHomeModule {}
