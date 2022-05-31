import { Component, OnInit } from '@angular/core';
import { ServiceProviderService } from '../service-provider.service';

@Component({
  selector: 'app-service-provider-view-request',
  templateUrl: './service-provider-view-request.component.html',
  styleUrls: ['./service-provider-view-request.component.css']
})
export class ServiceProviderViewRequestComponent implements OnInit {
  sid: any;
  viewRequest: any;
  constructor(private serproservice: ServiceProviderService) {

    this.sid = sessionStorage.getItem("sid");
    //alert(this.sid);
  }

  ngOnInit(): void {
    this.serproservice.getViewRequest(this.sid).subscribe((x) => {
      this.viewRequest = x;
    });
  }

  changeRequest(enquireid: number) {
    this.serproservice.updateAvailableStatus(enquireid).subscribe((x) => {
      //alert(x);
      if (x)
        alert("Request Accepted");
      else
        alert("Request acceptation failed");
    });
    this.ngOnInit();
  }
}
