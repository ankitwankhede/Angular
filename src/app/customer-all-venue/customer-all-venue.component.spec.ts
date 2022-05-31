import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAllVenueComponent } from './customer-all-venue.component';

describe('CustomerAllVenueComponent', () => {
  let component: CustomerAllVenueComponent;
  let fixture: ComponentFixture<CustomerAllVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAllVenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAllVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
