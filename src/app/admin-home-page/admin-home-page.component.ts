import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  accountManagement(){
    this.router.navigate(['accountManagement'],{relativeTo:this.route});
  }
  reportGeneration(){
    this.router.navigate(['reportGeneration'],{relativeTo:this.route});
  }
  logout() {
   // sessionStorage.clear();
    alert("logout");
    this.router.navigate([''], { relativeTo: this.route });
    // location.reload();
  }
}
