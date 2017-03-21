import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { BookingsService } from '../../../shared/services/booking.service';

import { IBooking } from '../../../shared/interfaces/booking';

@Component({
  selector: 'app-other',
  templateUrl: 'admin-dash.component.html',
  styleUrls: ['admin-dash.component.css'],
  providers: [BookingsService]
})

export class AdminDashComponent implements OnInit {
  name: any;
  state: string = '';
  bookings: IBooking[];

  constructor(public af: AngularFire,private router: Router, private _bookingService: BookingsService) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/');
  }


  ngOnInit() {
    this._bookingService.getFiveBookings().subscribe( bookings =>
      this.bookings = bookings);
  }

}

