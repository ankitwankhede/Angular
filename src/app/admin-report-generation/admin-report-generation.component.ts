import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-report-generation',
  templateUrl: './admin-report-generation.component.html',
  styleUrls: ['./admin-report-generation.component.css']
})
export class AdminReportGenerationComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  monthlyOrder(){
    this.router.navigate(['monthlyOrder'],{relativeTo:this.route});

  }
  monthlyPayment(){
    this.router.navigate(['monthlyPayment'],{relativeTo:this.route});

  }
}
