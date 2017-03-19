import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ReservationComponent} from "./components/reservation/reservation.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {AppointmentComponent} from "./components/appointment/appointment.component";


const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
