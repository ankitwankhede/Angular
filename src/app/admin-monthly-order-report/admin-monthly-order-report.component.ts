import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-monthly-order-report',
  templateUrl: './admin-monthly-order-report.component.html',
  styleUrls: ['./admin-monthly-order-report.component.css']
})
export class AdminMonthlyOrderReportComponent implements OnInit {

  ordrs:any;
  constructor(private adminser:AdminService) { }

  ngOnInit(): void {
  }

  getReportGenaration(startdate: string, endDate: string)
  {
    //alert(startdate + "," + endDate);
    this.adminser.getReport(startdate, endDate).subscribe((x)=>{
      this.ordrs=x
      //alert(JSON.stringify(x));
    });
    
  }
}
