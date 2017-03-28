import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ITable } from '../interfaces/table';

import 'rxjs/add/operator/map';

@Injectable()

export class TablesService {
  timestamps: FirebaseListObservable<ITable[]>;

  constructor(private _af: AngularFire){
  }

  getTables() {
    this.timestamps = this._af.database.list('/tables')as
      FirebaseListObservable<ITable[]>;
    return this.timestamps;
  }
}
