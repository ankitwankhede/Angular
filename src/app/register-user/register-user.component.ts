import { Component, OnInit } from '@angular/core';
import { CustomerRegisterService } from '../customer-register.service';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../User';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  //private userRegisterService:
  cus:any;
  res: any = { "result": false };
  savUserid: any;
  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerRegisterService) {
    this.cus= new User();
  }

  ngOnInit(): void {

  }
  Register(): void {
    // alert(this.cus.username+" "+this.cus.first_name+" "+ this.cus.last_name+" "+ this.cus.email+" "+ this.cus.password+" "+this.cus.mobile_no+" "+ this.cus.add_line1+" "+ this.cus.add_line2);
    let cus: User = new User(this.cus.username, this.cus.first_name, this.cus.last_name, this.cus.email, this.cus.password, this.cus.mobile_no, this.cus.add_line1, this.cus.add_line2);
    this.customerService.addUser(cus).subscribe((response) => {
      //this.savUserid = response;
      //alert(this.savUserid.userid);
      if (response)
        alert("Customer registered successfully");
      else
        alert("Customer registered failed");

    });
    this.router.navigateByUrl('login');

  }
}
