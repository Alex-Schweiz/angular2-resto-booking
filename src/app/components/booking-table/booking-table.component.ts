import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../../shared/services/booking.service';

import { IBooking } from '../../shared/interfaces/booking';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.css'],
  providers: [BookingsService]
})
export class BookingTableComponent implements OnInit {
  pageTitle = 'Welcome to Booking table';
  bookings: IBooking[];

  constructor(private _bookingService: BookingsService) { }

  ngOnInit() {
    this._bookingService.getBookings().subscribe( bookings => {
      this.bookings = bookings;
    });
  }

  addBooking(
    dateOfReservation: string,
    timeOfReservation: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    numberOfPersons: number,
    comment: string) {
    var created_at = new Date().toString();

    var newBooking = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      numberOfPersons: numberOfPersons,
      comment: comment,
      dateOfReservation: dateOfReservation,
      timeOfReservation: timeOfReservation,
      created_at: created_at
    };

    console.log(newBooking);

    this._bookingService.addBooking(newBooking);
  }
}
