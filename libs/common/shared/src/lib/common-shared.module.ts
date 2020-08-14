import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from '@frontend/common/material';
import { FormsModule } from '@angular/forms';

import { COMPONENTS } from './components';

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,
    FormsModule
  ],
  exports: [
    CommonMaterialModule,
    FormsModule,
    ...COMPONENTS
  ],
  declarations: [...COMPONENTS]
})
export class CommonSharedModule { }
