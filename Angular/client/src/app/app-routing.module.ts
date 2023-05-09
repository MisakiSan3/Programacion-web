import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoFoundPagesComponent } from './not-found-pages/no-found-pages.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { WebRoutingModule } from './web/web-routing.module';

const Routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NoFoundPagesComponent },
];

@NgModule({       
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes),
    PagesRoutingModule,
    AuthRoutingModule,
    WebRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
