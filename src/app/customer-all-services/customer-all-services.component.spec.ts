import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAllServicesComponent } from './customer-all-services.component';

describe('CustomerAllServicesComponent', () => {
  let component: CustomerAllServicesComponent;
  let fixture: ComponentFixture<CustomerAllServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAllServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAllServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
