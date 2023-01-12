import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  private productService= inject(ProductService)
  constructor() {}

  ngOnInit(): void {
    this.productService.getProducts();
    //this.productService.getProduct();
    //this.productService.createProduct();
    //this.productService.updateProduct();
    //this.productService.deleteProduct()
  }
  
}
