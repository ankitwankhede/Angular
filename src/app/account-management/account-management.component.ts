import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  getAllCustomer(){
    this.router.navigate(['allCustomer'],{relativeTo:this.route});
  }

  getAllServiceProvider(){
    this.router.navigate(['allServiceProvider'],{relativeTo:this.route});

  }
}
