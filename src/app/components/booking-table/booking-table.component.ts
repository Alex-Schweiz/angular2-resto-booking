import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.css']
})
export class BookingTableComponent implements OnInit {
  pageTitle = 'Welcome to Booking table';

  constructor() { }

  ngOnInit() {
  }

}
