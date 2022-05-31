import { Component, OnInit } from '@angular/core';
import { CustomerRegisterService } from '../customer-register.service';
import { ServiceProvider } from '../ServiceProvider';
import { Enquire } from '../Enquire';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customer-all-services',
  templateUrl: './customer-all-services.component.html',
  styleUrls: ['./customer-all-services.component.css']
})
export class CustomerAllServicesComponent implements OnInit {

  enquire: any;
  servedService: any;
  cid: any;
  user: any;
  enqBooked: boolean = false;
  constructor(private customerService: CustomerRegisterService,private route: ActivatedRoute, private router: Router) {
    this.enquire = new Enquire();
    this.cid = sessionStorage.getItem("cid");
    //alert(this.cid);
   }

  ngOnInit(): void {
    this.customerService.getServiceProvider().subscribe((x) => {
      this.servedService = x;
    });
    this.customerService.getUserById(this.cid).subscribe((y) => {
      this.user = y;
    });
  }
  sendEnquiry(s: ServiceProvider, evntDT: string) {

    let enquire: Enquire = new Enquire(new Date(evntDT), this.user, s, false);
    //  alert(JSON.stringify(enquire));
    this.customerService.sendEnquiry(enquire).subscribe((x) => {
      this.enqBooked = x;
      // alert(res);
    });

    
  }
}
