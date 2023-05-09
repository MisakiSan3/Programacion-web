import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

const Routes: Routes = [
  {
    path: 'dashboardWeb', component: WebComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'categoryWeb', component: CategoryComponent },
      { path: 'productWeb', component: ProductComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
      //Isak Gómez
    ]
  }  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ],
  exports:[RouterModule]
})
export class WebRoutingModule { }
