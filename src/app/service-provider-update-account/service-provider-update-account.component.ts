import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-provider-update-account',
  templateUrl: './service-provider-update-account.component.html',
  styleUrls: ['./service-provider-update-account.component.css']
})
export class ServiceProviderUpdateAccountComponent implements OnInit {
sid:any;
  constructor() {
    this.sid = sessionStorage.getItem("sid");
   // alert(this.sid);
   }

  ngOnInit(): void {
  }

}
