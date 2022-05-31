import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderHomePageComponent } from './service-provider-home-page.component';

describe('ServiceProviderHomePageComponent', () => {
  let component: ServiceProviderHomePageComponent;
  let fixture: ComponentFixture<ServiceProviderHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
