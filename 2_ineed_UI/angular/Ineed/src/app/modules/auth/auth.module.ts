import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterStepOneComponent } from './components/register/register-step-one/register-step-one.component';
import { RegisterStepTwoComponent } from './components/register/register-step-two/register-step-two.component';
import { RegisterStepThreeComponent } from './components/register/register-step-three/register-step-three.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterStepOneComponent,
    RegisterStepTwoComponent,
    RegisterStepThreeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
