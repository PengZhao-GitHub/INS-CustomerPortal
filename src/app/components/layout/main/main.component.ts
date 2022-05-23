import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  profileID: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.profileID = localStorage.getItem('profileID');
    console.log('main layout:', this.profileID);
  }

  openSideMenu() {
    console.log("clicked");
    document.getElementById('cp-side-menu').style.width = '250px';
    document.getElementById('cp-main').style.marginLeft = '250px';
    //document.getElementById('main').style.width = 'calc(100% - 250px)';
  }

  closeSideMenu() {
    document.getElementById('cp-side-menu').style.width = '0px';
    document.getElementById('cp-main').style.marginLeft = '0px';
    //document.getElementById('main').style.width = '100%';
  }

  goToTop() {
    window.scroll(0,0);
  }

  search() {
    //document.querySelector('cp-search-input').style.visibility = '';
    //window.alert('hello');
    //console.log(document.getElementsByClassName('cp-search-input')[0].value);
    //document.getElementsByClassName('cp-search-input')[0].style.visibility = 'hidden';
  }

  login() {
      this.router.navigate(['/login']);
  }

  logout(){
      this.router.navigate(['/logout']);
  }

  showProfile() {
      let profileID = localStorage.getItem('profileID');
      if (profileID) {
          this.router.navigate(['/profile', profileID]);
      } else {
          this.router.navigate(['/profile']);
      }
      
  }
}
