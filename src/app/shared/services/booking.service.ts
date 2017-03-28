import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { IBooking } from '../interfaces/booking';
import { IReservation } from '../interfaces/reservation';

import 'rxjs/add/operator/map';

@Injectable()

export class BookingsService {
  bookings: FirebaseListObservable<IBooking[]>;
  reservations: FirebaseListObservable<IReservation[]>;

  constructor(private _af: AngularFire) {
  }

  getReservations() {
    this.reservations = this._af.database.list('/reservations', {})as
      FirebaseListObservable<IReservation[]>;
    return this.reservations;
  }

  addReservation(newReservation) {
    return this.reservations.push(newReservation);
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
    return this.bookings['key'];
  }
  updateBooking(key, updBooking) {
    return this.bookings.update(key, updBooking);
  }
}
