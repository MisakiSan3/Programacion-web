
import { Component, inject, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ProductModel,CreateProductModel,updateProductModel} from '../../models/product-model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products:ProductModel[] = [];
  selectedProduct: updateProductModel = {id: 0,title:'', price:0, description:''};

 constructor(private productHttpService:ProductService) {
 }
 
 dataUP: updateProductModel = {
  title: 'zapatos',
  price: 60,
  description: 'calzado',
  id: 0,
}
data: CreateProductModel = {
  title: 'esfero',
  price: 45,
  description: 'utiles escolares',
  categoryId: 1,
  images: ["https://api.lorem.space/image/watch?w=640&h=480&r=5922", "https://api.lorem.space/image/watch?w=640&h=480&r=3622"],
}
 ngOnInit(): void {
   this.getProducts();
   //this.getProduct(304);
   //this.createProduct(this.data);
   //this.updateProduct(461,this.dataUP);
   //this.deleteProduct(461);
 }

 selectProduct(product: ProductModel){
  this.selectedProduct = product;
  console.log(this.selectedProduct);
  
 }
 getProducts(){
   const url = "https://api.escuelajs.co/api/v1/products";
   this.productHttpService.getAll().subscribe(
     response =>{
       this.products = response;
       console.log(response);
     }
   )
 }
 deleteProduct(id: ProductModel['id']){
  this.productHttpService.destroy(id).subscribe(
    response =>{
      this.products = this.products.filter(product => product.id != id);
      console.log(response);
    }
  )
}
 createProduct(data: CreateProductModel){
  this.productHttpService.store(data).subscribe(
    response =>{
      console.log(response);
    }
  )
}
 getProduct(id: ProductModel['id'] ){
  const url = "https://api.escuelajs.co/api/v1/products/id";
  return this.productHttpService.getOne(id).subscribe(
    response =>{
      console.log(response);
    }
  )
}
 
 
 
 updateProduct(id: ProductModel['id'],data: updateProductModel){
   this.productHttpService.update(this.selectedProduct.id, this.selectedProduct).subscribe(
     response =>{
       console.log(response);
     }
   )
 }

 

}
