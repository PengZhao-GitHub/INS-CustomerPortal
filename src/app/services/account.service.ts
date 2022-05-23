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
export class AccountService {

  baseUrl:string = 'http://localhost:3000';
  profileapi:string = '/profile/';

  tokenBaseUrl: string = 'http://localhost:5000/admin';  //Got CORS becuase fogot to add http
  getTokenApi: string = '/getToken/'

  constructor(private http: HttpClient) { }

  getProfile(id):Observable<any>{
    console.log(id);

    console.log(`${this.baseUrl}${this.profileapi}${id}`);
    
    // HttpClient does not send cookie automaticly, you need to add it manually
    return this.http.get<any>(`${this.baseUrl}${this.profileapi}${id}`, {withCredentials: true});  //Attach cookie {withCredentials: true}, this will also cause CORS issue, need to fix reponse headers issues at server side
  }

  getToken(acc):Observable<any>{
    //
    console.log(`${this.tokenBaseUrl}${this.getTokenApi}`);
    console.log(acc);
    return this.http.post<any>(`${this.tokenBaseUrl}${this.getTokenApi}`, acc, httpOptions);
  }
  

}
