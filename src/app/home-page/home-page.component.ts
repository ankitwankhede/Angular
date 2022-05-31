import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isLogged: any;


  constructor(private route: ActivatedRoute, private router: Router) {
    // sessionStorage.setItem("isLogged",'false');

  }
  ngOnInit(): void {
    sessionStorage.setItem("isLogged", 'false');
    //location.reload();

    this.isLogged = sessionStorage.getItem("isLogged");
   // alert(this.isLogged);
  }

  login() {
    this.router.navigate(['login'], { relativeTo: this.route });
  }
  
  logout() {
    sessionStorage.clear();
    alert("logout");
    this.router.navigate([''], { relativeTo: this.route });
    // location.reload();
  }
}
