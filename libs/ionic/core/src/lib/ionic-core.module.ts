import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonCoreModule } from '@frontend/common/core';

@NgModule({
  imports: [
    CommonModule,
    CommonCoreModule
  ],
  exports: [
    CommonCoreModule
  ]
})
export class IonicCoreModule { }
