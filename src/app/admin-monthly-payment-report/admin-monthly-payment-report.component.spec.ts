import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMonthlyPaymentReportComponent } from './admin-monthly-payment-report.component';

describe('AdminMonthlyPaymentReportComponent', () => {
  let component: AdminMonthlyPaymentReportComponent;
  let fixture: ComponentFixture<AdminMonthlyPaymentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMonthlyPaymentReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMonthlyPaymentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
