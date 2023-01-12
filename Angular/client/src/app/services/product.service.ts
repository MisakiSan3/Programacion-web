import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'https://api.escuelajs.co/api/v1/products';
  private httpClient = inject(HttpClient)
  constructor() { }
  data = {
    title: 'Libros',
    price: 14,
    description: 'Halo Image / Isak Gómez',
    images: ["https://sm.ign.com/ign_es/screenshot/default/analisis-halo-infinite_cjdd.jpg"],
    categoryId: 1,
  };
  getProducts() {
    const response = this.httpClient
      .get(this.url)
      .subscribe(response => {
        console.log(response);
      });
  }
  createProduct() {
    const response = this.httpClient
      .post(this.url,this.data)
      .subscribe(response => {
        console.log(response);
      });
  }
  updateProduct() {
    const urlID = this.url + '/278'
    const response = this.httpClient
      .put(urlID,this.data)
      .subscribe(response => {
        console.log(response);
      });
  }
  getProduct() {
    const id = '/36'
    const urlId = this.url + id
    const response = this.httpClient
      .get(urlId)
      .subscribe(response  => {
        console.log(response);
      });
  }
  deleteProduct() {
    const id = '/278'
    const urlId = this.url + id
    const response = this.httpClient
      .delete(urlId)
      .subscribe(response  => {
        console.log(response);
      });
  }
}
