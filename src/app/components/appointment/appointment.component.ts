import { Component } from '@angular/core';

import { ITimestamp } from '../../shared/timestamp';

@Component({
  moduleId: module.id,
  selector: 'appointment',
  templateUrl: 'appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent  {
  pageTitle: string = 'Available appointments';

  timestamps: ITimestamp[] = [{
    "time" : "07:00 am – 08:00 am",
    "slots" : 6
  },{
    "time" : "08:15 am – 09:15 am",
    "slots" : 6
  },{
    "time" : "09:30 am – 10:30 am",
    "slots" : 6
  },{
    "time" : "10:45 am – 11:45 am",
    "slots" : 6
  },{
    "time" : "12:00 pm – 01:00 pm",
    "slots" : 6
  },{
    "time" : "01:15 pm – 02:15 pm",
    "slots" : 6
  },{
    "time" : "02:30 pm – 03:30 pm",
    "slots" : 6
  },{
    "time" : "03:45 pm – 04:45 pm",
    "slots" : 6
  },{
    "time" : "05:00 pm – 06:00 pm",
    "slots" : 6
  },{
    "time" : "06:15 pm – 07:15 pm",
    "slots" : 6
  },{
    "time" : "07:30 pm – 08:30 pm",
    "slots" : 6
  },{
    "time" : "08:45 pm – 09:45 pm",
    "slots" : 6
  }
  ]
}
