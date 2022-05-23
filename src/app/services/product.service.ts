import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'context-type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:string = 'http://localhost:5000/pas/api';
  productapi:string = '/product/';
  quoteapi:string = '/quote';

  constructor(private http: HttpClient) { }

  getProduct(product_id):Observable<any[]>{
    console.log(product_id);

    return this.http.get<any[]>(`${this.baseUrl}${this.productapi}${product_id}`);
  }

  getQuote(selectedCoverage):Observable<any[]>{
    console.log("params", selectedCoverage);
    var params = new HttpParams().set('requestData',JSON.stringify(selectedCoverage));
    console.log("new params", params);
    return this.http.post<any[]>(`${this.baseUrl}${this.quoteapi}`, selectedCoverage, httpOptions);
  }

}
