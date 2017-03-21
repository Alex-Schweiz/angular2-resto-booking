import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ReservationComponent} from "./components/reservation/reservation.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {AppointmentComponent} from "./components/appointment/appointment.component";
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { AdminBookingComponent } from './components/admin/admin-booking/admin-booking.component';

//Providers
import {routing, appRoutingProviders} from "./app.routing";
import {AuthGuard} from "./shared/auth.service";

export const firebaseConfig = {
  apiKey: "AIzaSyCokQz-QYBmembwliSq_QnZbVb1RIyaRl4",
  authDomain: "resto-booking.firebaseapp.com",
  databaseURL: "https://resto-booking.firebaseio.com",
  storageBucket: "resto-booking.appspot.com",
  messagingSenderId: "749039489023"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ReservationComponent,
    CalendarComponent,
    AppointmentComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    AdminDashComponent,
    AdminBookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [appRoutingProviders, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
