import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountManagementComponent } from './account-management/account-management.component';
import { AdminAllCustomerComponent } from './admin-all-customer/admin-all-customer.component';
import { AdminAllServiceProviderComponent } from './admin-all-service-provider/admin-all-service-provider.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AdminMonthlyOrderReportComponent } from './admin-monthly-order-report/admin-monthly-order-report.component';
import { AdminMonthlyPaymentReportComponent } from './admin-monthly-payment-report/admin-monthly-payment-report.component';
import { AdminReportGenerationComponent } from './admin-report-generation/admin-report-generation.component';
import { CustomerAllCateringComponent } from './customer-all-catering/customer-all-catering.component';
import { CustomerAllDecorationComponent } from './customer-all-decoration/customer-all-decoration.component';
import { CustomerAllPhotographyComponent } from './customer-all-photography/customer-all-photography.component';
import { CustomerAllServicesComponent } from './customer-all-services/customer-all-services.component';
import { CustomerAllVenueComponent } from './customer-all-venue/customer-all-venue.component';
import { CustomerChangePasswordComponent } from './customer-change-password/customer-change-password.component';
import { CustomerGiveFeedbackComponent } from './customer-give-feedback/customer-give-feedback.component';
import { CustomerHomePageComponent } from './customer-home-page/customer-home-page.component';
import { CustomerSearchServiceComponent } from './customer-search-service/customer-search-service.component';
import { CustomerViewBookedServiceComponent } from './customer-view-booked-service/customer-view-booked-service.component';
import { CustomerViewEnquireComponent } from './customer-view-enquire/customer-view-enquire.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ServiceProviderHomePageComponent } from './service-provider-home-page/service-provider-home-page.component';
import { ServiceProviderRegisterComponent } from './service-provider-register/service-provider-register.component';
import { ServiceProviderServedHistoryComponent } from './service-provider-served-history/service-provider-served-history.component';
import { ServiceProviderUpdateAccountComponent } from './service-provider-update-account/service-provider-update-account.component';
import { ServiceProviderViewBookedServiceComponent } from './service-provider-view-booked-service/service-provider-view-booked-service.component';
import { ServiceProviderViewRequestComponent } from './service-provider-view-request/service-provider-view-request.component';

const routes: Routes = [
  // { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registerCustomer', component: RegisterUserComponent },
  { path: 'registerServiceProvider', component: ServiceProviderRegisterComponent },
  {
    path: 'adminHomepage', component: AdminHomePageComponent,
    children: [
      {
        path: 'accountManagement', component: AccountManagementComponent,
        children: [
          { path: 'allCustomer', component: AdminAllCustomerComponent },
          { path: 'allServiceProvider', component: AdminAllServiceProviderComponent }
        ]
      },
      {
        path: 'reportGeneration', component: AdminReportGenerationComponent,
        children: [
          { path: 'monthlyOrder', component: AdminMonthlyOrderReportComponent },
          { path: 'monthlyPayment', component: AdminMonthlyPaymentReportComponent }
        ]
      }
    ]
  },

  {
    path: 'customerHomepage', component: CustomerHomePageComponent,
    children: [
      { path: 'viewBookedService', component: CustomerViewBookedServiceComponent },
      {
        path: 'searchService', component: CustomerSearchServiceComponent,
        children: [
          { path: 'allservices', component: CustomerAllServicesComponent },
          { path: 'allcatering', component: CustomerAllCateringComponent },
          { path: 'allphotography', component: CustomerAllPhotographyComponent },
          { path: 'allvenue', component: CustomerAllVenueComponent },
          { path: 'alldecoration', component: CustomerAllDecorationComponent }
        ]
      },
      { path: 'viewEnquire', component: CustomerViewEnquireComponent },

      { path: 'giveFeedback', component: CustomerGiveFeedbackComponent },
    ]
  },
  {
    path: 'serviceProviderHomepage', component: ServiceProviderHomePageComponent,
    children: [
      { path: 'viewRequest', component: ServiceProviderViewRequestComponent },
      { path: 'viewBooking', component: ServiceProviderViewBookedServiceComponent },
      { path: 'serviceHistory', component: ServiceProviderServedHistoryComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
