import { Component, OnInit } from '@angular/core';
import { CustomerRegisterService } from '../customer-register.service'
import { ServiceProvider } from '../ServiceProvider';
import { Enquire } from '../Enquire';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customer-all-catering',
  templateUrl: './customer-all-catering.component.html',
  styleUrls: ['./customer-all-catering.component.css']
})
export class CustomerAllCateringComponent implements OnInit {
  catr: any;
  serviceid: any;
  cid: any;
  enquire: any;
  user: any;
  enqBooked: boolean = false;
  constructor(private customerService: CustomerRegisterService, private route: ActivatedRoute, private router: Router) {
    this.enquire = new Enquire();
    this.cid = sessionStorage.getItem("cid");
    //alert(this.cid);
  }
  ngOnInit(): void {
    this.serviceid = 1;
    //alert(this.serviceid);
    this.customerService.getServiceProviderbyserviceid(this.serviceid).subscribe((x) => {
      this.catr = x;
      //  alert(JSON.stringify(x));
    });
  }

  sendEnquiry(s: ServiceProvider, evntDT: string) {

    let enquire: Enquire = new Enquire(new Date(evntDT), this.user, s, false);
    //  alert(JSON.stringify(enquire));
    this.customerService.sendEnquiry(enquire).subscribe((x) => {
      this.enqBooked = x;
      // alert(res);
    });
    this.customerService.getUserById(this.cid).subscribe((y) => {
      this.user = y;
    });
  }
}
