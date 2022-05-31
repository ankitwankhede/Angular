import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-provider-home-page',
  templateUrl: './service-provider-home-page.component.html',
  styleUrls: ['./service-provider-home-page.component.css']
})
export class ServiceProviderHomePageComponent implements OnInit {
  serpro: any;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.serpro = JSON.parse(sessionStorage.serProCredential);

  }

  ngOnInit(): void {
  }
  viewRequest() {
    this.router.navigate(['viewRequest'], { relativeTo: this.route });
  }

  viewBooking() {
    this.router.navigate(['viewBooking'], { relativeTo: this.route });
  }
  
  history() {
    this.router.navigate(['serviceHistory'], { relativeTo: this.route });
  }
  logout() {
    sessionStorage.clear();
    alert("logout");
    this.router.navigate([''], { relativeTo: this.route });
    // location.reload();
  }
}
