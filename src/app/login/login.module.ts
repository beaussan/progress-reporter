import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, AngularFireAuthModule],
})
export class LoginModule {}
