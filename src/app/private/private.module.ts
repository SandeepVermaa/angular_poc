import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { AuthPrivateGuard } from './services/auth-private.guard';
import { UpdateDataService } from './services/update-data.service';
import { UserPagesComponent } from './user-pages/user-pages.component';
import { HeaderComponent } from './header/header.component';
import { FAQsComponent } from './f-aqs/f-aqs.component';
// import { ConfirmPasswordDirective } from '../register/check.directive';


@NgModule({
  declarations: [
    ProfileComponent,
    NavComponent,
    MyBookingsComponent,
    UserPagesComponent,
    HeaderComponent,
    FAQsComponent,
    // ConfirmPasswordDirective
  ],

  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule
  ],
  providers:[AuthPrivateGuard, UpdateDataService]

})
export class PrivateModule { }
