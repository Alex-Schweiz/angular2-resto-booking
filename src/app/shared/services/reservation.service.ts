import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import 'rxjs/add/operator/map';

@Injectable()

export class ReservationService {
  bookings: FirebaseListObservable<any>;
  reservations: FirebaseListObservable<any>;

  constructor(private _af: AngularFire) {
  }

  getReservations() {
    this.reservations = this._af.database.list('/reservations', {})as
      FirebaseListObservable<any>;
    return this.reservations;
  }

  addReservation(newReservation) {
    return this.reservations.push(newReservation);
  }
  /*deleteBooking(key) {
    return this.bookings.remove(key);
  }

  updateBooking(key, updBooking) {
    return this.bookings.update(key, updBooking);
  }*/
}
