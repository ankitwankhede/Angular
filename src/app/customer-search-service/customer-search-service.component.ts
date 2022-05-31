import { Component, OnInit } from '@angular/core';
import { ResService } from '../resService';
import { CustomerRegisterService } from '../customer-register.service';
import { User } from '../User';
import { ServiceProvider } from '../ServiceProvider';
import { Enquire } from '../Enquire';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-search-service',
  templateUrl: './customer-search-service.component.html',
  styleUrls: ['./customer-search-service.component.css']
})
export class CustomerSearchServiceComponent implements OnInit {
  enquire: any;
  servedService: any;
  cid: any;
  user: any;
  enqBooked: boolean = false;
  minDate: any;
  constructor(private customerService: CustomerRegisterService,private route: ActivatedRoute, private router: Router) {
    this.enquire = new Enquire();
    this.cid = sessionStorage.getItem("cid");
    // alert(this.cid);
    this.minDate = new Date();
    // this.minDate = moment(new Date()).format('YYYY-MM-DD') 
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

    // let enquire: Enquire = new Enquire(new Date(evntDT), this.user, s, false);
    // //  alert(JSON.stringify(enquire));
    // this.customerService.sendEnquiry(enquire).subscribe((x) => {
    //   this.enqBooked = x;
    //   if (x)
    //     alert("Enquiry Registered");
    //   else
    //     alert("Enquiry Registeration Failed");

    // });
    let enquire: Enquire = new Enquire(new Date(evntDT), this.user, s, false);
    //  alert(JSON.stringify(enquire));
    this.customerService.sendEnquiry(enquire).subscribe((x) => {
      this.enqBooked = x;
      // alert(res);
    });


  }
  getCateringServiceProvider()
  {
    this.router.navigate(['allcatering'],{relativeTo:this.route});
  }
  getPhographyServiceProvider()
  {
    this.router.navigate(['allphotography'],{relativeTo:this.route});
  }
  getVenueServiceProvider()
  {
    this.router.navigate(['allvenue'],{relativeTo:this.route});
  }
  getDecorationServiceProvider()
  {
    this.router.navigate(['alldecoration'],{relativeTo:this.route});
  }
  getAllServiceProvider(){
    this.router.navigate(['allservices'],{relativeTo:this.route});
  }

}
