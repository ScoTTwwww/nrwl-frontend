import { NgModule } from '@angular/core';


import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
import {
  ServerModule,
  ServerTransferStateModule
} from "@angular/platform-server";
@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FlexLayoutServerModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
