import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewEnquireComponent } from './customer-view-enquire.component';

describe('CustomerViewEnquireComponent', () => {
  let component: CustomerViewEnquireComponent;
  let fixture: ComponentFixture<CustomerViewEnquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewEnquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewEnquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
