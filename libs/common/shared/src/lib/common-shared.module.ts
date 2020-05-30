import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from '@frontend/common/material';


@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule
  ],
  exports: [
    CommonMaterialModule
  ]
})
export class CommonSharedModule {}
