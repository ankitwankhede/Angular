import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerRegisterService } from '../customer-register.service';
import { ServiceProviderService } from '../service-provider.service';
import { AdminService } from '../admin.service';
import { LoginCrede } from '../LoginCrede';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userType: any;
  res: any;
  uid: any;
  nm: any;
  logincred:any;
  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerRegisterService, private serviceProviderService: ServiceProviderService, private adminService: AdminService) {
     this.logincred = new LoginCrede("","");
  }

  ngOnInit(): void {
  }

  getUserType(event: any) {
    this.userType = event.target.value;
  }

  login(): void {
    let usnm = this.logincred.username;
    let pwd = this.logincred.pwd;

    if (this.userType == 'C') {
      this.customerService.checkLogin(usnm, pwd).subscribe((x) => {
        if (x) {
          this.customerService.getUserByUsername(usnm).subscribe(y => {
            this.res = y;
            //alert(JSON.stringify(this.res));
            sessionStorage.setItem("cusCredential", JSON.stringify(this.res));
            sessionStorage.setItem("cid", this.res.userid);
            // this.nm=JSON.parse(sessionStorage.cusCredential);
            // alert(this.nm.first_name);
          });
          this.router.navigateByUrl('customerHomepage');

          sessionStorage.setItem("isLogged", 'true');
        } else {
          alert("username and password does not match");
        }
      });
    }
    if (this.userType == 'S') {
      this.serviceProviderService.checkLogin(usnm, pwd).subscribe((x) => {
        //this.checkServiceProvider = x;
        if (x) {
          this.serviceProviderService.getServiceProviderByUsername(usnm).subscribe((y) => {
            this.res = y;
            //  alert(JSON.stringify(this.res));
            sessionStorage.setItem("serProCredential", JSON.stringify(this.res));
            sessionStorage.setItem("sid", this.res.serviceproviderid);
            //   alert(sessionStorage.getItem("sid"));
          });
          this.router.navigateByUrl('serviceProviderHomepage');
          // sessionStorage.setItem("isLogged","true");
        } else {
          alert("username and password does not match");
        }
      });
    }
    if (this.userType == 'A') {
      this.adminService.checkLogin(usnm, pwd).subscribe((x) => {
        if (x) {
          this.router.navigateByUrl('adminHomepage');
        } else {
          alert("username and password does not match");
        }
      });
    }
  }
}
