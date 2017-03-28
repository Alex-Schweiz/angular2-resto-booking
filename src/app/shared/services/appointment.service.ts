import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ITimestamp } from '../interfaces/timestamp';

import 'rxjs/add/operator/map';

@Injectable()

export class TimestampsService {
  timestamps: FirebaseListObservable<ITimestamp[]>;

  constructor(private _af: AngularFire) { }

  getTimestamps(){
      this.timestamps = this._af.database.list('/appointments')as
        FirebaseListObservable<ITimestamp[]>;
    return this.timestamps;
  }
}
