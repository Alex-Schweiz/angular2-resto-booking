import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { IBooking } from '../interfaces/booking';

import 'rxjs/add/operator/map';

@Injectable()

export class BookingsService {
  timestamps: FirebaseListObservable<IBooking[]>;

  constructor(private _af: AngularFire){
  }

  getBookings(){
    this.timestamps = this._af.database.list('/bookings', {
      query: {
        orderByChild: 'dateOfReservation'
      }
    })as
      FirebaseListObservable<IBooking[]>;
    return this.timestamps;
  }

  getFiveBookings(){
    this.timestamps = this._af.database.list('/bookings', {
      query: {
        orderByChild: 'dateOfReservation',
        limitToLast: 5
      }
    })as
      FirebaseListObservable<IBooking[]>;
    return this.timestamps;
  }

  /*getCategories(){
   this.categories = this._af.database.list('/categories')as
   FirebaseListObservable<Category[]>;
   return this.categories;
   }

   addBusiness(newBusiness){
   return this.businesses.push(newBusiness);
   }

   updateBusiness(key, updBusiness){
   return this.businesses.update(key, updBusiness);
   }

   deleteBusiness(key){
   return this.businesses.remove(key);
   }*/
}
