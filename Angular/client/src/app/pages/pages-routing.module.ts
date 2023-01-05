import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthModule } from '../auth/auth.module';

const Routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'category', component: CategoryComponent },
      { path: 'product', component: ProductComponent }
    ]
  }  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(Routes),AuthModule],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
