import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ProductModel,updateProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  private productService = inject(ProductService);
  productList: ProductModel[] = [];
  selectedProduct: updateProductModel = {}
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
    this.getProducts();
    //this.productService.getProduct();
    //this.productService.createProduct();
    //this.productService.updateProduct();
  }
  async getProducts(){
    const response = this.productService.getAll().subscribe((response) => {
      this.productList = response;
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
  updateProduct(product: ProductModel) {
    const response = this.productService
      .update(product.id, product)
      .subscribe((response) => {
        console.log(response);
      });
  }
  deleteProduct(id: number) {
    const response = this.productService.destroy(id).subscribe((response) => {
      this.productList = this.productList.filter(product => product.id != id)
      console.log(response);
    });
  }

}
