import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  private httpClient = Inject(HttpClient);
  constructor() {}
  url: string = 'https://api.escuelajs.co/api/v1/products';
  data = {
    title: 'Libros',
    price: 15,
    description: 'Útiles escolares / Isak Gómez',
    categoryId: 1,
  };

  ngOnInit(): void {
    this.getProducts();
    // this.getProduct();
  }
  getProducts() {
    const response = this.httpClient
      .get(this.url)
      .suscribe((response: any): any => {
        console.log(response);
      });
  }
  saveProduct() {
    const response = this.httpClient
      .post(this.url)
      .suscribe((response: any): any => {
        console.log(response);
      });
  }
  getProduct() {
    const response = this.httpClient
      .get(this.url + '/8')
      .suscribe((response: any): any => {
        console.log(response);
      });
  }
}
