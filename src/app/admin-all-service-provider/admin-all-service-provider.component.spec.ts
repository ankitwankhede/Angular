import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllServiceProviderComponent } from './admin-all-service-provider.component';

describe('AdminAllServiceProviderComponent', () => {
  let component: AdminAllServiceProviderComponent;
  let fixture: ComponentFixture<AdminAllServiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllServiceProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
