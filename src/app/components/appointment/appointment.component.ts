import { Component, OnInit } from '@angular/core';
import { TimestampsService } from '../../shared/services/appointment.service';

import { ITimestamp } from '../../shared/interfaces/timestamp';

@Component({
  moduleId: module.id,
  selector: 'appointment',
  templateUrl: 'appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  providers: [TimestampsService]
})
export class AppointmentComponent implements OnInit {
  pageTitle: string = 'Available appointments';
  timestamps: ITimestamp[];

  constructor(private _timestampsService: TimestampsService) {
  }

  ngOnInit() {
    this._timestampsService.getTimestamps().subscribe( timestamps =>
      this.timestamps = timestamps);
  }
}
