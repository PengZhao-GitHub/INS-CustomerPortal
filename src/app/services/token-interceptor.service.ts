import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next) {

    const PASAPIToken = localStorage.getItem('PAS.API.Token');
    
    console.log(req);
    console.log('TokenInterceptorService:', PASAPIToken);

    //Attached the API token for PAS API only 
    if (req.url.indexOf("5000") >= 0) {
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + PASAPIToken
        }
      })
      return next.handle(tokenizedReq);
    } else {
      return next.handle(req);
    }
  }

}
