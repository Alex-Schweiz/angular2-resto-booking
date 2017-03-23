import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { IBooking } from '../interfaces/booking';

import 'rxjs/add/operator/map';

@Injectable()

export class BookingsService {
  bookings: FirebaseListObservable<IBooking[]>;

  constructor(private _af: AngularFire) {
  }

  getBookings() {
    this.bookings = this._af.database.list('/bookings', {
      query: {
        orderByChild: 'dateOfReservation'
      }
    })as
      FirebaseListObservable<IBooking[]>;
    return this.bookings;
  }

  getFiveBookings() {
    this.bookings = this._af.database.list('/bookings', {
      query: {
        orderByChild: 'dateOfReservation',
        limitToLast: 5
      }
    })as
      FirebaseListObservable<IBooking[]>;
    return this.bookings;
  }

  addBooking(newBooking) {
    return this.bookings.push(newBooking);
  }
  deleteBooking(key) {
  return this.bookings.remove(key);
  }
  showOneBooking(key) {
    console.dir('This booking ' );
    return this.bookings['key'];
  }
  updateBooking(key, updBooking) {
    return this.bookings.update(key, updBooking);
  }
}
