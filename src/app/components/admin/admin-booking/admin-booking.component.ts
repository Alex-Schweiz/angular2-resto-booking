import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../../../shared/services/booking.service';

import { IBooking } from '../../../shared/interfaces/booking';

@Component({
  moduleId: module.id,
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css'],
  providers: [BookingsService]
})
export class AdminBookingComponent implements OnInit {
  pageTitle = 'All bookings';
  bookings: IBooking[];

  activeKey: string;
  activeFirstName: string;
  activeLastName: string;
  activePhone: string;
  activeEmail: string;
  activeNumberOfPersons: string;
  activeComment: string;
  activeDateOfReservation: string;
  activeTimeOfReservation: string;

  constructor(private _bookingService: BookingsService) { }

  ngOnInit() {
    this._bookingService.getBookings().subscribe( bookings =>
      this.bookings = bookings);
  }

  deleteBooking(key) {
    this._bookingService.deleteBooking(key);
  }

  showOneBooking(key) {
    this._bookingService.showOneBooking(key);
  }

  showEdit(booking) {
    this.activeKey = booking.key;
    this.activeFirstName = booking.firstName;
    this.activeLastName = booking.lastName;
    this.activePhone = booking.phone;
    this.activeEmail = booking.email;
    this.activeNumberOfPersons = booking.numberOfPersons;
    this.activeComment = booking.comment;
    this.activeDateOfReservation = booking.dateOfReservation;
    this.activeTimeOfReservation = booking.timeOfReservation;
  }

  updateBooking() {
    /*this.activeKey = this.key;*/
    let updBooking = {
      firstName: this.activeFirstName,
      lastName: this.activeLastName,
      phone: this.activePhone,
      email: this.activeEmail,
      numberOfPersons: this.activeNumberOfPersons,
      activeComment: this.activeComment,
      dateOfReservation: this.activeDateOfReservation,
      timeOfReservation: this.activeTimeOfReservation
    }


    this._bookingService.updateBooking(this.activeKey, updBooking);
  }
}
