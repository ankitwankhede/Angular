import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderViewBookedServiceComponent } from './service-provider-view-booked-service.component';

describe('ServiceProviderViewBookedServiceComponent', () => {
  let component: ServiceProviderViewBookedServiceComponent;
  let fixture: ComponentFixture<ServiceProviderViewBookedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderViewBookedServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderViewBookedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
