import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComponent } from '../../sys/admin/admin.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileID: string;

  selected = {};

  constructor(private router: Router) { }

  ngOnInit() {
    this.profileID = localStorage.getItem('profileID');
    if(this.profileID) {
      this.router.navigate(['/profile',this.profileID])
    }

    this.selected = JSON.parse(localStorage.getItem('OAuthOptions'));
    console.log(this.selected);



    window.scroll(0,0); 
  }

}
