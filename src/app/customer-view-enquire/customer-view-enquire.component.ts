import { Component, OnInit } from '@angular/core';
import { CustomerRegisterService } from '../customer-register.service';
import { Order } from '../Order';

@Component({
  selector: 'app-customer-view-enquire',
  templateUrl: './customer-view-enquire.component.html',
  styleUrls: ['./customer-view-enquire.component.css']
})
export class CustomerViewEnquireComponent implements OnInit {
  cid: any;
  isPayed: boolean = false;
  enq: any;
  usr: any;
  serPro: any;

  ordr: any;
  constructor(private customerService: CustomerRegisterService) {
    this.ordr = new Order();
    this.cid=sessionStorage.getItem("cid"); 
   // alert(this.cid);
  }

  ngOnInit(): void {
    this.customerService.getEnquireByUser(this.cid).subscribe((x) => { this.enq = x; });
  }

  placeOrder(sid: number, cnt: any, evntDT: string) {
    
    this.customerService.getUserById(this.cid).subscribe((x) => { this.usr = x; });
    this.customerService.getServiceProviderById(sid).subscribe((x) => { this.serPro = x; });
    alert(this.usr);
    let ordr: Order = new Order(cnt, new Date(evntDT), this.serPro, this.usr);
    //alert(JSON.stringify(ordr));
    this.customerService.makeOrder(ordr).subscribe((x) => {
      this.isPayed = x;
      
    });
    alert("Order placed");
  }
}
