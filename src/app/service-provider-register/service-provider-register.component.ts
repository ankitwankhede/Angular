import { Component, OnInit } from '@angular/core';
import { ServiceProviderService } from '../service-provider.service';
import { ServiceProvider } from '../ServiceProvider';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../Service';

@Component({
  selector: 'app-service-provider-register',
  templateUrl: './service-provider-register.component.html',
  styleUrls: ['./service-provider-register.component.css']
})
export class ServiceProviderRegisterComponent implements OnInit {
  // serv:Service=new Service();
  //serpro: ServiceProvider=new ServiceProvider("","",0,"",0,"",false,"",0,"","","",this.serv,"");
  serpro:any;
  sers: any;
  res: boolean = false;
  sid: any;
  services: any;
  constructor(private serProService: ServiceProviderService, private route: ActivatedRoute, private router: Router) {
    this.serpro = new ServiceProvider();
  }

  ngOnInit(): void {
    this.serProService.getServices().subscribe((x) => { this.sers = x; });
    // console.table(this.services);
  }
  getserviceId(event: any) {
    this.sid = event.target.value;
   // alert(this.sid);
    this.serProService.getSelectedServiceById(this.sid).subscribe(x => {
      this.services = x;
     // alert(JSON.stringify(this.services));
    });

    // alert(this.services.servicetype);
  }

  Register() {

    let serpro: ServiceProvider = new ServiceProvider(this.serpro.add_line1, this.serpro.add_line2,
      this.serpro.charges, this.serpro.email, this.serpro.experience_year, this.serpro.first_name, false,
      this.serpro.last_name, this.serpro.mobile_no, this.serpro.password, this.serpro.servicedesc,
      this.serpro.username, this.services, this.serpro.agencyname);

    alert(JSON.stringify(serpro));

    this.serProService.addServiceProvider(serpro).subscribe((response) => {
      this.res = response;
      //alert(response);

      if (response)
        this.router.navigateByUrl('login');
      else
        alert("Service provider registeration failed");
    });

  }
}
