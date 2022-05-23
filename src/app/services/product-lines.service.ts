import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    'context-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductLinesService {

  baseUrl:string = 'http://localhost:1337';
  productLines:string = '/product-lines';
  products:string = '/products';
  showcases:string = '/showcases';
  coverages:string = '/coverages';

  //productLinesUrl:string = 'http://localhost:1337/product-lines';

  constructor(private http: HttpClient) { }
 
  getProductLines():Observable<any[]>{
    console.log('getProductLines');
    //return this.http.get<any[]>(this.productLinesUrl);
    return this.http.get<any[]>(`${this.baseUrl}${this.productLines}`);
  }

  getProducts():Observable<any[]>{
    console.log('getProducts');
    return this.http.get<any[]>(`${this.baseUrl}${this.products}`);
  }

  getShowcases():Observable<any[]>{
    console.log('getShowcases');
    return this.http.get<any[]>(`${this.baseUrl}${this.showcases}`);
  }

  getCoverges():Observable<any[]>{
    console.log('getCoverages');
    return this.http.get<any[]>(`${this.baseUrl}${this.coverages}`);
  }

  getCoverge(id):Observable<any[]>{
    console.log('getCoverage:', id);
    return this.http.get<any>(`${this.baseUrl}${this.coverages}/${id}`);
  }
  
}
