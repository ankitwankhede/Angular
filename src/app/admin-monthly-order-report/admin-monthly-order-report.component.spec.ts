import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMonthlyOrderReportComponent } from './admin-monthly-order-report.component';

describe('AdminMonthlyOrderReportComponent', () => {
  let component: AdminMonthlyOrderReportComponent;
  let fixture: ComponentFixture<AdminMonthlyOrderReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMonthlyOrderReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMonthlyOrderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
