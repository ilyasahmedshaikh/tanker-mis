import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-external-tankers',
  templateUrl: './sales-external-tankers.component.html',
  styleUrls: ['./sales-external-tankers.component.scss']
})
export class SalesExternalTankersComponent implements OnInit {

  table: any = [];

  constructor() { }

  ngOnInit(): void {
    this.table = [
      {
        id: 1,
        name: 'PSO',
        phone: '03338956230',
        representative: 'Amjad',
        address: 'Karachi',
      },
      {
        id: 2,
        name: 'ATTOCK',
        phone: '03107451114',
        representative: 'Waqas',
        address: 'Karachi',
      },
      {
        id: 3,
        name: 'TOTAL PARCO',
        phone: '03222223603',
        representative: 'Mukhtiyar',
        address: 'Karachi',
      },
      {
        id: 4,
        name: 'BYCO',
        phone: '03005567990',
        representative: 'Ghulam Rasool',
        address: 'Karachi',
      },
      {
        id: 5,
        name: 'HASCOL',
        phone: '03115231411',
        representative: 'Aftab Nabi',
        address: 'Karachi',
      },
      {
        id: 6,
        name: 'SHELL',
        phone: '03025689251',
        representative: 'Jabbar',
        address: 'Karachi',
      },
    ]
  }

}
