import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const Routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'category', component: CategoryComponent },
      { path: 'product', component: ProductComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(Routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
