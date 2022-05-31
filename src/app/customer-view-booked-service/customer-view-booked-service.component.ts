import { Component, OnInit } from '@angular/core';
import { CustomerRegisterService } from '../customer-register.service';
import { Payment } from '../Payment';

@Component({
  selector: 'app-customer-view-booked-service',
  templateUrl: './customer-view-booked-service.component.html',
  styleUrls: ['./customer-view-booked-service.component.css']
})
export class CustomerViewBookedServiceComponent implements OnInit {
  bookedService: any;
  cid: any;
  order: any;
  servicePay: any;
  // payDT:string='';


  constructor(private customerService: CustomerRegisterService) {
    this.servicePay = new Payment();
    this.cid = sessionStorage.getItem("cid");
  //  alert(this.cid);

  }

  ngOnInit(): void {
    this.customerService.getBookedService(this.cid).subscribe((x) => {
      this.bookedService = x;
    });
  }

  makePayment(amount: number, ordrID: number,) {
    this.customerService.getOrderById(ordrID).subscribe((x) => {
      this.order = x;
    });
    alert(JSON.stringify(this.order));

    let payDT: string = new Date().toISOString().slice(0, 10).toString();
    let servicePay: Payment = new Payment(new Date(payDT), amount, this.order);

    //alert(JSON.stringify(servicePay));

    this.customerService.makePayment(servicePay).subscribe((x) => {
      // alert(x);
      if(x)
        alert("Payment done");
        else
        alert("Payment failed");
    });
    this.customerService.updatePayment(ordrID).subscribe((x) => {
      // alert(x);
      if(x)
      alert("Amount transfered");
      else
      alert("Amount transaction failed");
    });
    this.ngOnInit();
  }
}
