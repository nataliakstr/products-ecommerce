import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http: HttpClient;
  productsArray: Product[] = [];

  constructor() {
    this.http = inject(HttpClient);
  }

  
  getAllProducts() {
    return this.http.get<Product[]>("http://localhost:3000/products");
  }

  createProduct(newProduct: Product) {
    return this.http.post<Product[]>("http://localhost:3000/products", newProduct);
  }
}
