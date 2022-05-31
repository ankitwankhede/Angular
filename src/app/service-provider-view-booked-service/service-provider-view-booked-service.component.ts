import { Component, OnInit } from '@angular/core';
import {ServiceProviderService} from '../service-provider.service';
@Component({
  selector: 'app-service-provider-view-booked-service',
  templateUrl: './service-provider-view-booked-service.component.html',
  styleUrls: ['./service-provider-view-booked-service.component.css']
})
export class ServiceProviderViewBookedServiceComponent implements OnInit {
  sid:any;
  viewBookedServices:any;

  constructor(private serproservice:ServiceProviderService) { 
    this.sid = sessionStorage.getItem("sid");
   // alert(this.sid);
  }

  ngOnInit(): void {
    this.serproservice.getBookedServices(this.sid).subscribe((x)=>{
      this.viewBookedServices=x;
    });
  }

}
