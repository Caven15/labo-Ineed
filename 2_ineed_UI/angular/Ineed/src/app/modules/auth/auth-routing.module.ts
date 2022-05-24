import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterStepOneComponent } from './components/register/register-step-one/register-step-one.component';
import { RegisterStepThreeComponent } from './components/register/register-step-three/register-step-three.component';
import { RegisterStepTwoComponent } from './components/register/register-step-two/register-step-two.component';

const routes: Routes = [
  { path: '', redirectTo : 'login', pathMatch : 'full'},
  { path: 'registerStepOne', component: RegisterStepOneComponent},
  { path: 'registerStepTwo', component: RegisterStepTwoComponent},
  { path: 'registerStepThree', component: RegisterStepThreeComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
