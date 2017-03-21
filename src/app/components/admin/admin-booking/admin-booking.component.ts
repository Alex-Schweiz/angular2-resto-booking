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
  pageTitle: string = 'All bookings';
  bookings: IBooking[];

  constructor(private _bookingService: BookingsService) { }

  ngOnInit(){
    this._bookingService.getBookings().subscribe( bookings =>
      this.bookings = bookings);
  }

}
