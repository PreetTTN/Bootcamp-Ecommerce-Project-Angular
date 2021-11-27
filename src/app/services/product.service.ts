import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  getProduct(productId:number) {
    const baseURL = "https://fakestoreapi.com/products/" + productId;
    return this.httpClient.get<any[]>(baseURL);
  }

  getAllProduct() {
    const baseURL = "https://fakestoreapi.com/products";
    return this.httpClient.get<any[]>(baseURL);
  }

 
}
