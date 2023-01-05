import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CategoryComponent,
    DashboardComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoryComponent,
    DashboardComponent,
    ProductComponent,
  ],
})
export class PagesModule { }
