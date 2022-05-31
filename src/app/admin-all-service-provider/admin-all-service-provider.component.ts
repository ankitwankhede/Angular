import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-all-service-provider',
  templateUrl: './admin-all-service-provider.component.html',
  styleUrls: ['./admin-all-service-provider.component.css']
})
export class AdminAllServiceProviderComponent implements OnInit {
  servicep: any;

  constructor(private adminser: AdminService) { }

  ngOnInit(): void {
    this.adminser.getServiceProvider().subscribe((x) => { this.servicep = x; });

  }

  activateSerPro(sid: number) {
    this.adminser.updateServiceProviderStatus(sid).subscribe((x) => {
      if (x)
        alert("Successfully activated");
      else
        alert("Account Activation failed");
    });

    this.ngOnInit();
  }
}
