import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  profileID: string;
  username: string;
  email: string;
  thumbnail: string;

  constructor(private routeParam: ActivatedRoute,
    private accountService: AccountService,
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit() {
    this.routeParam.paramMap.subscribe(params => {
      this.profileID = params.get('id');
      console.log(this.profileID);

      if (this.profileID) {
        // Save profileID to local storage
        localStorage.setItem('profileID', this.profileID);
        //Get user profile 
        this.accountService.getProfile(this.profileID).subscribe(userProfile => {
          console.log(userProfile);

          this.username = userProfile.username;
          this.email = userProfile.email;
          this.thumbnail = userProfile.thumbnail ? userProfile.thumbnail : '../assets/img/default.jpg';

          //since login is successful, disable login and show logout
          document.getElementById('login').style.display = 'none';
          document.getElementById('profile').style.display = 'inline';
          document.getElementById('logout').style.display = 'inline';
          // update slide menu -> disable login and show logout
          document.getElementById('btn-login').style.display = 'none';
          document.getElementById('btn-logout').style.display = 'flex';

        }, (err) => {
          console.log('403 forbidden', err);
          localStorage.removeItem('profileID'); //just in case the profileID is still saved in the local storage
          //since login fail, disable logout and show login 
          document.getElementById('login').style.display = 'inline';
          document.getElementById('profile').style.display = 'none';
          document.getElementById('logout').style.display = 'none';
          // update slide menu -> disable logout and show logoin
          document.getElementById('btn-login').style.display = 'flex';
          document.getElementById('btn-logout').style.display = 'none';

          this.router.navigate(['/login']);
        })
      } else {
        //this.profileID = "The user has been logged out";
        localStorage.removeItem('profileID');
        //since it has been logged out, disable logout and show login 
        document.getElementById('login').style.display = 'inline';
        document.getElementById('profile').style.display = 'none';
        document.getElementById('logout').style.display = 'none';
        // update slide menu -> disable logout and show logoin
        document.getElementById('btn-login').style.display = 'flex';
        document.getElementById('btn-logout').style.display = 'none';

        //this.cookieService.deleteAll();
        console.log(document.cookie);
        //browser.manage().deleteAllCookies();

      }
    });

    window.scroll(0,0);
  }

  setCookie() {
    //test cookie service
    this.cookieService.set('myCookie', 'Peng zhao');
  }

  readCookie() {
    //test cookie service
    let cookieValue = this.cookieService.get('myCookie');
    console.log('myCookie', cookieValue);
  }

  login() {
    this.router.navigate(['/login']);
  }

}
