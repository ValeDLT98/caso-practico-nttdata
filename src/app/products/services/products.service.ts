import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../../enviroments.local';
import { catchError, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  getProducts() {
    
    return this.http.get<Product[]>(`${enviroment.baseURL}/bp/products`, {headers: {'authorId' : "1"}}).pipe(
      catchError(()=> of([]))
    )

    
  }
}