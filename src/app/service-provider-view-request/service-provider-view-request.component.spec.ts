import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderViewRequestComponent } from './service-provider-view-request.component';

describe('ServiceProviderViewRequestComponent', () => {
  let component: ServiceProviderViewRequestComponent;
  let fixture: ComponentFixture<ServiceProviderViewRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderViewRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderViewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
