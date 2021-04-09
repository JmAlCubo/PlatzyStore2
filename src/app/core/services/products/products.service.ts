import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Product } from './../../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = `${environment.url_Api}/products/`;

  constructor(
    private http: HttpClient,
  ){
  }

  getAllProducts(): any {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: string): any{
    return this.http.get<Product>(`${this.url}${id}`);
  }

  createProduct(product: Product): any{
    return this.http.post(this.url, product);
  }

  uppdateProduct(id: string, product: Product): any{
    return this.http.put(`${this.url}${id}`, product);
  }

  deleteProduct(id: string): any{
    return this.http.delete(`${this.url}${id}`);
  }

}
