import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSearchServiceComponent } from './customer-search-service.component';

describe('CustomerSearchServiceComponent', () => {
  let component: CustomerSearchServiceComponent;
  let fixture: ComponentFixture<CustomerSearchServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSearchServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSearchServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
