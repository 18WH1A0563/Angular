import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component';
import { ShowDriversComponent } from './show-drivers/show-drivers.component';
import { RegDriverComponent } from './reg-driver/reg-driver.component';
import { BillgenerationPipe } from './billgeneration.pipe';
import { LogoutComponent } from './logout/logout.component';
import { RequestsComponent } from './requests/requests.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { BillComponent } from './bill/bill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { RegManagerComponent } from './reg-manager/reg-manager.component';
import { ShowManagersComponent } from './show-managers/show-managers.component';
import { ShowAllDriversComponent } from './show-all-drivers/show-all-drivers.component';
import { ShowAllCustomersComponent } from './show-all-customers/show-all-customers.component';
import { OtpConfirmationComponent } from './otp-confirmation/otp-confirmation.component';
import { DeallocateDriversComponent } from './deallocate-drivers/deallocate-drivers.component'
import { AuthGuard } from './auth.guard';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AllRecordsComponent } from './all-records/all-records.component';
import { RegDriverAdminComponent } from './reg-driver-admin/reg-driver-admin.component';

const appRoot: Routes = [   {path:'', component: HomePageComponent},
                            {path:'app-home-page', component: HomePageComponent},
                            {path:'app-manager-login', component: ManagerLoginComponent},
                            {path:'app-manager-homepage', canActivate:[AuthGuard], component:ManagerHomepageComponent},//, data:{some_data : 'some value'}
                            {path:'app-manager-homepage/app-show-drivers', canActivate:[AuthGuard],component:ShowDriversComponent},
                            {path:'app-manager-homepage/app-reg-driver', canActivate:[AuthGuard],component:RegDriverComponent},
                            {path:'app-manager-homepage/app-requests', canActivate:[AuthGuard],component:RequestsComponent},
                            {path:'app-customer-registration', component:CustomerRegistrationComponent},
                            {path:'app-customer-registration/app-bill', component:BillComponent},
                            {path:'logout', component: HomePageComponent},
                            {path:'app-admin-login', component:AdminLoginComponent},
                            {path:'app-admin-login/app-admin-homepage', component:AdminHomepageComponent},
                            {path:'app-admin-login/app-admin-homepage/app-reg-manager', component:RegManagerComponent},
                            {path:'app-admin-login/app-admin-homepage/app-show-managers',component: ShowManagersComponent },
                            {path:'app-admin-login/app-admin-homepage/app-show-all-drivers', component:ShowAllDriversComponent},
                            {path:'app-admin-login/app-admin-homepage/app-show-all-customers', component:ShowAllCustomersComponent},
                            {path:'app-admin-login/app-admin-homepage/app-advertisement', component:AdvertisementComponent},
                            {path:'app-manager-homepage/app-deallocate-drivers',component:DeallocateDriversComponent},
                            {path:'app-customer-registration/app-bill/app-otp-confirmation', component:OtpConfirmationComponent},
                            {path:'app-requests', canActivate:[AuthGuard],component:RequestsComponent},
                            {path:'app-show-drivers', canActivate:[AuthGuard],component:ShowDriversComponent},
                            {path:'app-admin-login/app-admin-homepage/app-all-records', component: AllRecordsComponent},
                            {path:'app-admin-login/app-admin-homepage/app-reg-driver-admin', component: RegDriverAdminComponent}
                          ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManagerLoginComponent,
    HomePageComponent,
    ManagerHomepageComponent,
    ShowDriversComponent,
    RegDriverComponent,
    BillgenerationPipe,
    LogoutComponent,
    RequestsComponent,
    CustomerRegistrationComponent,
    BillComponent,
    AdminLoginComponent,
    AdminHomepageComponent,
    RegManagerComponent,
    ShowManagersComponent,
    ShowAllDriversComponent,
    ShowAllCustomersComponent,
    OtpConfirmationComponent,
    DeallocateDriversComponent,
    AdvertisementComponent,
    AllRecordsComponent,
    RegDriverAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoot),
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
