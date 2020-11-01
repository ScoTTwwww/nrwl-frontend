import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './service/user.service';

@NgModule({
  imports: [CommonModule],
  providers: [UserService]
})
export class CommonUserModule {}
