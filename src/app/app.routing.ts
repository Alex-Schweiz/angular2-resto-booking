import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {AppointmentComponent} from './components/appointment/appointment.component';
import { AuthGuard } from './shared/auth.service';
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { AdminBookingComponent } from './components/admin/admin-booking/admin-booking.component';
import { BookingTableComponent } from './components/booking-table/booking-table.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reservation',  component: ReservationComponent },
  { path: 'calendar',  component: CalendarComponent },
  { path: 'appointment',  component: AppointmentComponent },
  { path: 'booktable',  component: BookingTableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'admin/dashboard', component: AdminDashComponent, canActivate: [AuthGuard] },
  { path: 'admin/bookings', component: AdminBookingComponent, canActivate: [AuthGuard] }

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
