import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderUpdateAccountComponent } from './service-provider-update-account.component';

describe('ServiceProviderUpdateAccountComponent', () => {
  let component: ServiceProviderUpdateAccountComponent;
  let fixture: ComponentFixture<ServiceProviderUpdateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderUpdateAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderUpdateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
