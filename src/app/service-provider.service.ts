import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceProvider } from './ServiceProvider';
import { Service } from './Service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  base_url = "http://localhost:8080/";

  constructor(private serprohttp: HttpClient) {

  }

  addServiceProvider(serpro: ServiceProvider): Observable<any> {
    return this.serprohttp.post(this.base_url + "registerserviceprovider", serpro);
  }

  getServices(): Observable<any> {
    return this.serprohttp.get(this.base_url + "allservice");
  }

  getSelectedServiceById(sid: number): Observable<any> {
    return this.serprohttp.get(this.base_url + "getservicebyid/" + sid);
  }

  getAllServiceProvider(): Observable<any> {
    return this.serprohttp.get(this.base_url + "allserviceprovider");
  }

  getServiceProviderByUsername(usnm: string): Observable<any> {
    return this.serprohttp.get(this.base_url + "getServiceProviderByUserName/" + usnm);
  }

  checkLogin(usnm: string, pwd: string): Observable<any> {
    return this.serprohttp.get(this.base_url + "login/serviceprovider/" + usnm + "/" + pwd);
  }

  getUserByUsername(usnm: string): Observable<any> {
    return this.serprohttp.get(this.base_url + "getUserByUserName/" + usnm);
  }

  //view requests
  getViewRequest(id: number): Observable<any> {
    return this.serprohttp.get(this.base_url + "getserviceproviderenquirebyid/" + id);
  }

  //Add methods here
  //booked services
  getBookedServices(id: number): Observable<any> {
    return this.serprohttp.get(this.base_url + "serviceproviderviewbookedservices/" + id);
  }

  //viewHistory
  getViewHistory(id: number): Observable<any> {
    return this.serprohttp.get(this.base_url + "serviceproviderhistorybyid/" + id);
  }
  updateAvailableStatus(eid:number):Observable<any>{
    return this.serprohttp.get(this.base_url+"updateAvailable/"+eid);
  }
}
