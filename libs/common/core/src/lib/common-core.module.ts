import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ApiInterceptor } from './interceptors/api/api.interceptor';

export const BASE_PROVIDERS: any[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class CommonCoreModule {
  static forRoot() {
    return {
      ngModule: CommonCoreModule,
      providers: [...BASE_PROVIDERS]
    };
  }
}
