import { Component, OnInit } from '@angular/core';
import {ServiceProviderService} from '../service-provider.service';

@Component({
  selector: 'app-service-provider-served-history',
  templateUrl: './service-provider-served-history.component.html',
  styleUrls: ['./service-provider-served-history.component.css']
})
export class ServiceProviderServedHistoryComponent implements OnInit {
  sid:any;
  viewHistory:any;
  constructor(private serproservice:ServiceProviderService) { 
    this.sid = sessionStorage.getItem("sid");
    //alert(this.sid);
  }

  ngOnInit(): void {
    this.serproservice.getViewHistory(this.sid).subscribe((x)=>{
      this.viewHistory=x;
  });
  }

}
