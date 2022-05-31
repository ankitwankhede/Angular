import { Component, OnInit } from '@angular/core';
import { CustomerRegisterService } from '../customer-register.service'
import { Feedback } from '../Feedback';
import { Order } from '../Order';
@Component({
  selector: 'app-customer-give-feedback',
  templateUrl: './customer-give-feedback.component.html',
  styleUrls: ['./customer-give-feedback.component.css']
})
export class CustomerGiveFeedbackComponent implements OnInit {
  oldOrder: any;
  usr: any;
  ordr: any;
  fdk: any;
  cid: any;

  saveFeedback: boolean = false;
  constructor(private customerService: CustomerRegisterService) {
    this.fdk = new Feedback();
    this.ordr = new Order();
    this.cid = sessionStorage.getItem("cid");
    // alert(this.cid);
  }

  ngOnInit(): void {
    this.customerService.getOldOrderById(this.cid).subscribe((x) => {
      this.oldOrder = x;
    });
  }
  submitFeedback(oid: number, fdesc: string) {
    // this.customerService.getUserById(this.usr).subscribe((x) => { this.usr = x; });
    this.customerService.getOrderById(oid).subscribe((x) => { this.ordr = x; });
    alert(this.usr);
    let fdk: Feedback = new Feedback(fdesc, this.ordr);
    // alert(JSON.stringify(fdk));
    this.customerService.giveFeedback(fdk).subscribe((x) => {
      // alert(x)
      if (x)
        alert("Feedback Saved");
      else
        alert("Feedback Save error");
    });
  }
}
