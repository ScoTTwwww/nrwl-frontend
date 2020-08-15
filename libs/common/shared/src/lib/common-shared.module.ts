import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from '@frontend/common/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { COMPONENTS } from './components';

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ...COMPONENTS
  ],
  declarations: [...COMPONENTS]
})
export class CommonSharedModule { }
