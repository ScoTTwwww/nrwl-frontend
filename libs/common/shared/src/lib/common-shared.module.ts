import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from '@frontend/common/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,
    FormsModule
  ],
  exports: [
    CommonMaterialModule,
    FormsModule
  ]
})
export class CommonSharedModule {}
