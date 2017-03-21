import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ITimestamp } from '../timestamp';

import 'rxjs/add/operator/map';

@Injectable()

export class TimestampsService {
  timestamps: FirebaseListObservable<ITimestamp[]>;

  constructor(private _af: AngularFire){
  }

  getTimestamps(){
      this.timestamps = this._af.database.list('/appointments')as
        FirebaseListObservable<ITimestamp[]>;
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
