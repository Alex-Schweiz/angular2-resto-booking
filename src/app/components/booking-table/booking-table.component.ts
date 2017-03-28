import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BookingsService } from '../../shared/services/booking.service';

import { IBooking } from '../../shared/interfaces/booking';
import {IReservation} from '../../shared/interfaces/reservation';

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
  reservations: IReservation[];

  constructor(
    private _bookingService: BookingsService,
    /*private _reservationService: ReservationService,*/
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._bookingService.getBookings().subscribe( bookings => {
      this.bookings = bookings;
    });
    this._bookingService.getReservations().subscribe( reservations => {
      this.reservations = reservations;
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
    }
    const newReservation = {
      dateOfReservation: dateOfReservation,
      timeOfReservation: timeOfReservation,
      tableId: tableId,
      fakeTable: tableId + 2
    }

    /*const Reserved = {
      'dateOfReservation': {
        '1': 114
      }
    }*/

    /*const testReserved = {
      `${dateOfReservation}`: {
        `${tableId}`: `${timeOfReservation}`
      }
    }*/

    console.log(newBooking);
    this._bookingService.addBooking(newBooking);
    this._bookingService.addReservation(newReservation);
  }

  addReservation(
    dateOfReservation: string,
    timeOfReservation: string,
    tableId: string) {

    const newReservation = {
      dateOfReservation: dateOfReservation,
      timeOfReservation: timeOfReservation,
      tableId: tableId
    }
    console.log(newReservation);
  }
}
