import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  private productService = inject(ProductService);
  constructor() {}

  data = {
    title: 'Libros',
    price: 14,
    description: 'Halo Image / Isak Gómez',
    images: [
      'https://sm.ign.com/ign_es/screenshot/default/analisis-halo-infinite_cjdd.jpg',
    ],
    categoryId: 1,
  };

  ngOnInit(): void {
    this.productService.getAll();
    //this.productService.getProduct();
    //this.productService.createProduct();
    //this.productService.updateProduct();
    //this.productService.deleteProduct()
  }
  getProducts() {
    const response = this.productService.getAll().subscribe((response) => {
      console.log(response);
    });
  }
  getProduct() {
    const response = this.productService.getOne(7).subscribe((response) => {
      console.log(response);
    });
  }
  createProduct() {
    const response = this.productService
      .store(this.data)
      .subscribe((response) => {
        console.log(response);
      });
  }
  updateProduct() {
    const response = this.productService
      .update(7, this.data)
      .subscribe((response) => {
        console.log(response);
      });
  }
  deleteProduct() {
    const response = this.productService.destroy(7).subscribe((response) => {
      console.log(response);
    });
  }
}
