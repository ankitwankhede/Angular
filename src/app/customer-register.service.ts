import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { Enquire } from './Enquire';
import { Payment } from './Payment';
import { Order } from './Order';
import { Feedback } from './Feedback';

@Injectable({
  providedIn: 'root'
})
export class CustomerRegisterService {

  base_url = "http://localhost:8080/";
  constructor(private usrhttp: HttpClient) {
  }

  addUser(cus: User) {
    return this.usrhttp.post(this.base_url + "registeruser", cus);
  }

  //serviceproviderController
  getServiceProvider(): Observable<any> {
    return this.usrhttp.get(this.base_url + "allactiveserviceprovider");
  }

  //ordercontroller
  getBookedService(userid: number): Observable<any> {
    return this.usrhttp.get(this.base_url + "getBookedOrderByID/" + userid);
  }

  getEnquireByUser(userid: number): Observable<any> {
    return this.usrhttp.get(this.base_url + "getUserEnquireById/" + userid);
  }

  getUserById(userid: number): Observable<any> {
    return this.usrhttp.get(this.base_url + "getuserbyid/" + userid);
  }

  getServiceProviderById(serproid: number): Observable<any> {
    return this.usrhttp.get(this.base_url + "getserviceproviderbyid/" + serproid);
  }

  sendEnquiry(enq: Enquire): Observable<any> {
    return this.usrhttp.post(this.base_url + "registerenquire", enq);
  }

  getOrderById(oid: number): Observable<any> {
    return this.usrhttp.get(this.base_url + "getorderbyid/" + oid);
  }

  makePayment(pay: Payment): Observable<any> {
    return this.usrhttp.post(this.base_url + "registerpayment", pay);
  }

  makeOrder(ordr: Order): Observable<any> {
    return this.usrhttp.post(this.base_url + "registerorder", ordr);
  }

  checkLogin(usnm: string, pwd: string): Observable<any> {
    return this.usrhttp.get(this.base_url + "login/customer/" + usnm + "/" + pwd);
  }

  getUserByUsername(usnm:string):Observable<any>{
    return this.usrhttp.get(this.base_url+"getUserByUserName/"+usnm); 
  }


  getOldOrderById(id:number):Observable<any>{
    return this.usrhttp.get(this.base_url+"getOldOrder/"+id);
  }

  updatePayment(oid:number):Observable<any>{
    return this.usrhttp.get(this.base_url+"updatePayment/"+oid);
  }

  giveFeedback(fdk:Feedback):Observable<any>{
    return this.usrhttp.post(this.base_url+"registerfeedback",fdk);
  }
  updateUser(cus: User,id:number) {
    return this.usrhttp.post(this.base_url + "updateUser/"+id, cus);
  }
  getServiceProviderbyserviceid(id:number):Observable<any>{
    return this.usrhttp.get(this.base_url+"getserviceproviderbyserviceid/"+id);
  }
}
