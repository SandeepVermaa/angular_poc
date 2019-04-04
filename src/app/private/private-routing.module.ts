import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthPrivateGuard } from './services/auth-private.guard';
import { UserPagesComponent } from './user-pages/user-pages.component';

import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { FAQsComponent } from './f-aqs/f-aqs.component';

const routes: Routes = [
  // { path: 'profile', component: ProfileComponent , canActivate: [AuthPrivateGuard]}
  {
    path: 'userpages', component: UserPagesComponent,
    children: [
    { path: 'profile', component: ProfileComponent },
    { path: 'bookings', component: MyBookingsComponent },
    { path: 'faqs', component: FAQsComponent }],
    canActivate: [AuthPrivateGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
