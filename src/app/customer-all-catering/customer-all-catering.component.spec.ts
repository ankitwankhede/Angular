import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAllCateringComponent } from './customer-all-catering.component';

describe('CustomerAllCateringComponent', () => {
  let component: CustomerAllCateringComponent;
  let fixture: ComponentFixture<CustomerAllCateringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAllCateringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAllCateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
