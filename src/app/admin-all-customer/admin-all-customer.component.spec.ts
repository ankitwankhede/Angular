import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllCustomerComponent } from './admin-all-customer.component';

describe('AdminAllCustomerComponent', () => {
  let component: AdminAllCustomerComponent;
  let fixture: ComponentFixture<AdminAllCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
