import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAllDecorationComponent } from './customer-all-decoration.component';

describe('CustomerAllDecorationComponent', () => {
  let component: CustomerAllDecorationComponent;
  let fixture: ComponentFixture<CustomerAllDecorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAllDecorationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAllDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
