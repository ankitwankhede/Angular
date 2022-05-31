import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-all-customer',
  templateUrl: './admin-all-customer.component.html',
  styleUrls: ['./admin-all-customer.component.css']
})
export class AdminAllCustomerComponent implements OnInit {

  cust: any;
  constructor(private adminser: AdminService) { }

  ngOnInit(): void {
    this.adminser.getCustomer().subscribe((x) => { this.cust = x; });
  }

  activateUser(uid: number) {
    this.adminser.updateCusStatus(uid).subscribe((x) => {
      if (x)
        alert("Successfully activated");
      else
        alert("Account Activation failed");
    });
    this.ngOnInit();

  }
}
