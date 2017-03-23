import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent  {
   public showAppointments = false;

  toggleAppointment(){
    this.showAppointments = !this.showAppointments;
  }
}
