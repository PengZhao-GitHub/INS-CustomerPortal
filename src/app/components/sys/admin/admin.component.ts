import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { AccountService } from 'src/app/services/account.service';
import { APIEndpoints } from './APIEndPoints';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  CMS_URL:string = APIEndpoints.CMS_URL;
  CMS_API_URLs:Object = APIEndpoints.CMS_API_URLs;
  PAS_URL:string = APIEndpoints.PAS_URL;
  AUTH_GATEWAY_URL:string = APIEndpoints.AUTH_GATEWAY_URL;
  AUTH_URLs:Object = APIEndpoints.AUTH_URLs;
  AUTH_CALLBACK_URL:string = APIEndpoints.AUTH_CALLBACK_URL;


  baseUrl:string = 'http://localhost:5000/pas/api';
  
  clientName: string = "Account";
  clientSecret: string = "PASAPISecret";
  APIToken: string = localStorage.getItem('PAS.API.Token');

  selected = {
    google: true,
    twitter: true,
    line: true,
    facebook: true,
    linkedin: true,
    email: true
  }

  constructor(private accountService: AccountService) { }

  ngOnInit() {

    var saved = JSON.parse(localStorage.getItem('OAuthOptions'));

    if(saved) {
      this.selected = saved;
    }
    
    console.log(this.selected);
    localStorage.setItem('OAuthOptions', JSON.stringify(this.selected));
  }

  getToken() {
    
    let acc = {
      clientName: this.clientName,
      clientSecret: this.clientSecret
    }

    this.accountService.getToken(acc).subscribe(
      result => {
        console.log('Token', result);
        this.APIToken = result.token;
        console.log(this.APIToken);
        localStorage.setItem('PAS.API.Token', this.APIToken);
      },
      err => {
        console.log(err.error);
        this.APIToken = err.error;
      }
    )
  }

  selectAuthOptions(){
    console.log('Auth options', this.selected);
    localStorage.setItem('OAuthOptions', JSON.stringify(this.selected));
  }

}
