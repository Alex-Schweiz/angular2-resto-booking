import { Component, OnInit } from '@angular/core';
import { TablesService } from '../../shared/services/table.service';

import { ITable } from '../../shared/interfaces/table';

@Component({
  moduleId: module.id,
  selector: 'reservation',
  templateUrl: 'reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: [TablesService]
})
export class ReservationComponent implements OnInit{
  pageTitle: string = 'Table reservation';
  pageMotto: string = 'Our restaurant is the place for any food-accompanied occasion! ';
  pageDescription: string = 'Be it a business meeting lunch, a family birthday dinner, anniversary or a proposal romantic dinner or any other event… We will make sure the atmosphere and dishes do the justice! ';
  imagePath: string = '../../../assets/images/';

  tables: ITable[];

  constructor(private _tablesService: TablesService) {
  }

  ngOnInit(){
    this._tablesService.getTables().subscribe( tables =>
      this.tables = tables);
  }

}
