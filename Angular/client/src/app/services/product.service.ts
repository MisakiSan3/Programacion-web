import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CreateProductModel,
  ProductModel,
  updateProductModel,
} from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly Api_url: string = 'https://api.escuelajs.co/api/v1/products';
  private httpClient = inject(HttpClient);
  constructor() {}

  getAll(): Observable<ProductModel[]> {
    const url = `${this.Api_url}`;
    const response = this.httpClient.get<ProductModel[]>(url);
    return response;
  }
  store(producto: CreateProductModel) {
    const url = `${this.Api_url}`;
    const response = this.httpClient.post(url, producto);
    return response;
  }
  update(id: ProductModel['id'], producto: updateProductModel) {
    const url = `${this.Api_url}/${id}`;
    const response = this.httpClient.put(url, producto);
    return response;
  }
  getOne(id: ProductModel['id']): Observable<ProductModel> {
    const url = `${this.Api_url}/${id}`;
    const response = this.httpClient.get<ProductModel>(url);
    return response;
  }
  destroy(id: ProductModel['id']) {
    const url = `${this.Api_url}/${id}`;
    const response = this.httpClient.delete(url);
    return response;
  }
}
