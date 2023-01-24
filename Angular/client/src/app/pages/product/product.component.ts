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
  selectedProduct: updateProductModel = {id: 0, title:"", description:"",price:0, images:[], category: {id:0,name:""}}

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
  updateProduct(product: updateProductModel) {
    const response = this.productService
      .update(product.id, product)
      .subscribe((response) => {
        console.log(response);
      });
      this.getProducts()
  }
  deleteProduct(id: number) {
    const response = this.productService.destroy(id).subscribe((response) => {
      this.productList = this.productList.filter(product => product.id != id)
      console.log(response);
    });
  }
  editProduct(product: ProductModel){
    this.selectedProduct = product;
  }

}
