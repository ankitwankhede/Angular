import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAllPhotographyComponent } from './customer-all-photography.component';

describe('CustomerAllPhotographyComponent', () => {
  let component: CustomerAllPhotographyComponent;
  let fixture: ComponentFixture<CustomerAllPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAllPhotographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAllPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
