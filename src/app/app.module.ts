import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerHomePageComponent } from './customer-home-page/customer-home-page.component';
import { CustomerSearchServiceComponent } from './customer-search-service/customer-search-service.component';
import { CustomerViewBookedServiceComponent } from './customer-view-booked-service/customer-view-booked-service.component';
import { CustomerViewEnquireComponent } from './customer-view-enquire/customer-view-enquire.component';
import { CustomerChangePasswordComponent } from './customer-change-password/customer-change-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServiceProviderHomePageComponent } from './service-provider-home-page/service-provider-home-page.component';
import { ServiceProviderUpdateAccountComponent } from './service-provider-update-account/service-provider-update-account.component';
import { ServiceProviderServedHistoryComponent } from './service-provider-served-history/service-provider-served-history.component';
import { ServiceProviderRegisterComponent } from './service-provider-register/service-provider-register.component';

import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { CustomerGiveFeedbackComponent } from './customer-give-feedback/customer-give-feedback.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { AdminAllCustomerComponent } from './admin-all-customer/admin-all-customer.component';
import { AdminAllServiceProviderComponent } from './admin-all-service-provider/admin-all-service-provider.component';
import { AdminMonthlyOrderReportComponent } from './admin-monthly-order-report/admin-monthly-order-report.component';
import { AdminReportGenerationComponent } from './admin-report-generation/admin-report-generation.component';
import { ServiceProviderViewBookedServiceComponent } from './service-provider-view-booked-service/service-provider-view-booked-service.component';
import { ServiceProviderViewRequestComponent } from './service-provider-view-request/service-provider-view-request.component';
import { AdminMonthlyPaymentReportComponent } from './admin-monthly-payment-report/admin-monthly-payment-report.component';
import { CustomerAllServicesComponent } from './customer-all-services/customer-all-services.component';
import { CustomerAllCateringComponent } from './customer-all-catering/customer-all-catering.component';
import { CustomerAllPhotographyComponent } from './customer-all-photography/customer-all-photography.component';
import { CustomerAllDecorationComponent } from './customer-all-decoration/customer-all-decoration.component';
import { CustomerAllVenueComponent } from './customer-all-venue/customer-all-venue.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    CustomerHomePageComponent,
    CustomerSearchServiceComponent,
    CustomerViewBookedServiceComponent,
    CustomerViewEnquireComponent,
    CustomerChangePasswordComponent,
    HomePageComponent,
    ServiceProviderHomePageComponent,
    ServiceProviderUpdateAccountComponent,
    ServiceProviderServedHistoryComponent,
    ServiceProviderRegisterComponent,
    AdminHomePageComponent,
    CustomerGiveFeedbackComponent,
    AccountManagementComponent,
    AdminAllCustomerComponent,
    AdminAllServiceProviderComponent,
    AdminMonthlyOrderReportComponent,
    AdminReportGenerationComponent,
    ServiceProviderViewBookedServiceComponent,
    ServiceProviderViewRequestComponent,
    AdminMonthlyPaymentReportComponent,
    CustomerAllServicesComponent,
    CustomerAllCateringComponent,
    CustomerAllPhotographyComponent,
    CustomerAllDecorationComponent,
    CustomerAllVenueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
