import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customer-home-page',
  templateUrl: './customer-home-page.component.html',
  styleUrls: ['./customer-home-page.component.css']
})
export class CustomerHomePageComponent implements OnInit {
  usr: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.usr = JSON.parse(sessionStorage.cusCredential);


    // alert(JSON.parse(this.usr));
    //alert(this.usr.first_name);
    //alert(sessionStorage.getItem("cid"));

  }

  ngOnInit(): void {
    // let data = JSON.parse(localStorage.getItem("user") || '{}').userid;
    // alert(`in view booked service ${data}`);
  }

  searchService() {
    this.router.navigate(['searchService'], { relativeTo: this.route });
  }
  viewBookedService() {
    this.router.navigate(['viewBookedService'], { relativeTo: this.route });
  }

  viewEnquire() {
    this.router.navigate(['viewEnquire'], { relativeTo: this.route });
  }
  
  giveFeedback() {
    this.router.navigate(['giveFeedback'], { relativeTo: this.route });
  }
  logout() {
    sessionStorage.clear();
    alert("logout");
    this.router.navigate([''], { relativeTo: this.route });
    // location.reload();
  }
}
