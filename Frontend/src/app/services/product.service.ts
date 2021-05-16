import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private base_url = "http://localhost:8080/backend/api/products";
  newProduct = {} as Product;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base_url);
  }

  addProduct(product: Product): Promise<any> {
    return this.http
      .post<any>(this.base_url, product)
      .toPromise();
  } 

  deleteProduct(id: number) {
    return this.http.delete<Product>(this.base_url + '/' + id);
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(this.base_url + '/' + id);
  }

  updateProduct(id: number, product:Product): Promise<Product> {
    this.newProduct.id = id;
    this.newProduct.productName = product.productName;
    this.newProduct.description = product.description;
    this.newProduct.price = product.price;
    this.newProduct.type = product.type;
    this.newProduct.quantity = product.quantity;
    this.newProduct.reOrderLevel = product.reOrderLevel;

    return this.http
      .put<any>(this.base_url+'/'+id, this.newProduct)
      .toPromise();
  }
  
}
