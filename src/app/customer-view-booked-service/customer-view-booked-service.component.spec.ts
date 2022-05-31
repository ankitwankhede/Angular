import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewBookedServiceComponent } from './customer-view-booked-service.component';

describe('CustomerViewBookedServiceComponent', () => {
  let component: CustomerViewBookedServiceComponent;
  let fixture: ComponentFixture<CustomerViewBookedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewBookedServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewBookedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
