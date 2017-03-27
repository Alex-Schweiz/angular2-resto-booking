import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../../shared/services/booking.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { IBooking } from '../../shared/interfaces/booking';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.css'],
  providers: [BookingsService]
})
export class BookingTableComponent implements OnInit {
  pageTitle = 'Welcome to Booking table';
  tableId;
  bookings: IBooking[];

  constructor(
    private _bookingService: BookingsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._bookingService.getBookings().subscribe( bookings => {
      this.bookings = bookings;
    });
    this.activatedRoute.params.subscribe((params: Params) => {
      this.tableId = params['id'];
      console.log( 'Selected table is : ' + this.tableId);
    });
  }

  addBooking(
    dateOfReservation: string,
    timeOfReservation: string,
    tableId: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    numberOfPersons: number,
    comment: string) {
    const created_at = new Date().toString();

    const newBooking = {
      dateOfReservation: dateOfReservation,
      timeOfReservation: timeOfReservation,
      tableId: tableId,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      numberOfPersons: numberOfPersons,
      comment: comment,
      created_at: created_at
    };
    console.log(newBooking);
    this._bookingService.addBooking(newBooking);
  }
}
