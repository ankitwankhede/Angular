import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderServedHistoryComponent } from './service-provider-served-history.component';

describe('ServiceProviderServedHistoryComponent', () => {
  let component: ServiceProviderServedHistoryComponent;
  let fixture: ComponentFixture<ServiceProviderServedHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderServedHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderServedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
