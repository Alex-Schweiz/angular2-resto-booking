import { Component } from '@angular/core';

import { ITable } from '../../shared/table';

@Component({
  moduleId: module.id,
  selector: 'reservation',
  templateUrl: 'reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent  {
  pageTitle: string = 'Table reservation';
  pageMotto: string = 'Our restaurant is the place for any food-accompanied occasion! ';
  pageDescription: string = 'Be it a business meeting lunch, a family birthday dinner, anniversary or a proposal romantic dinner or any other event… We will make sure the atmosphere and dishes do the justice! ';
  imagePath: string = '../../../assets/images/';

  tables: ITable[] = [
    {
      "tableId": 1,
      "guests": 2,
      "className" : "col-md-3",
      "imageUrl": "reservetion_01.png"
    },{
      "tableId": 2,
      "guests": 6,
      "className" : "col-md-6",
      "imageUrl": "reservetion_02.png"
    },{
      "tableId": 3,
      "guests": 2,
      "className" : "col-md-3",
      "imageUrl": "reservetion_03.png"
    },{
      "tableId": 4,
      "guests": 2,
      "className" : "col-md-3",
      "imageUrl": "reservetion_04.png"
    }
    ,{
      "tableId": 5,
      "guests": 2,
      "className" : "col-md-3",
      "imageUrl": "reservetion_05.png"
    },{
      "tableId": 6,
      "guests": 6,
      "className" : "col-md-6",
      "imageUrl": "reservetion_06.png"
    },{
      "tableId": 7,
      "guests": 2,
      "className" : "col-md-3",
      "imageUrl": "reservetion_07.png"
    }
    ,{
      "tableId": 8,
      "guests": 2,
      "className" : "col-md-3",
      "imageUrl": "reservetion_08.png"
    },{
      "tableId": 9,
      "guests": 4,
      "className" : "col-md-3",
      "imageUrl": "reservetion_09.png"
    },{
      "tableId": 10,
      "guests": 4,
      "className" : "col-md-3",
      "imageUrl": "reservetion_10.png"
    }
  ];

}
