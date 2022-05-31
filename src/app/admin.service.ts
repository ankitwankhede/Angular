import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  base_url = "http://localhost:8080/";
  constructor(private adminhttp: HttpClient) { }


  getServiceProvider(): Observable<any> {
    return this.adminhttp.get(this.base_url + "GetAllServiceProviders");

  }

  checkLogin(usnm: string, pwd: string): Observable<any> {
    return this.adminhttp.get(this.base_url + "login/admin/" + usnm + "/" + pwd);
  }

  getCustomer(): Observable<any> {
    return this.adminhttp.get(this.base_url + "GetAllUsers");

  }

  getReport(startdate: string, endDate: string): Observable<any> {
    return this.adminhttp.get(this.base_url + "getOrderByDate/" + startdate + "/" + endDate);
  }


  getReportByPaymentdate(startdate: string, endDate: string): Observable<any> {
    return this.adminhttp.get(this.base_url + "getReportsByPaymentDate/" + startdate + "/" + endDate);
  }

  updateCusStatus(uid: number): Observable<any> {
    return this.adminhttp.get(this.base_url + "updateUserStatus/" + uid);
  }

  updateServiceProviderStatus(sid: number): Observable<any> {
    return this.adminhttp.get(this.base_url + "updateServiceProviderStatus/" + sid);
  }
}
