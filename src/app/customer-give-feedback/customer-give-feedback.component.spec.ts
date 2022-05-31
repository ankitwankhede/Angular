import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGiveFeedbackComponent } from './customer-give-feedback.component';

describe('CustomerGiveFeedbackComponent', () => {
  let component: CustomerGiveFeedbackComponent;
  let fixture: ComponentFixture<CustomerGiveFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerGiveFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGiveFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
