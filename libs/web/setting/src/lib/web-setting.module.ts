import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting/setting.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonSharedModule } from '@frontend/common/shared';
import { WebCoreModule } from '@frontend/web/core';

@NgModule({
  imports: [
    CommonModule,
    WebCoreModule,
    CommonSharedModule
  ],
  exports: [SettingComponent],
  declarations: [SettingComponent]
})
export class WebSettingModule {}
