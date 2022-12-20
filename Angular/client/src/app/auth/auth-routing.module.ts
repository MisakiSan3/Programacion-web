import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NoFoundPagesComponent } from '../not-found-pages/no-found-pages.component';

const Routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NoFoundPagesComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(Routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
