import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-monthly-payment-report',
  templateUrl: './admin-monthly-payment-report.component.html',
  styleUrls: ['./admin-monthly-payment-report.component.css']
})
export class AdminMonthlyPaymentReportComponent implements OnInit {
  rprt: any;

  constructor(private adminser: AdminService) { }

  ngOnInit(): void {
  }
  getReportGenaration(startdate: string, endDate: string) {
    //alert(startdate + "," + endDate);
    this.adminser.getReportByPaymentdate(startdate, endDate).subscribe((x) => {
      this.rprt = x
      //alert(JSON.stringify(x));
    });

  }
}
