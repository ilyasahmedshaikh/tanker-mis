import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-company-report',
  templateUrl: './sales-company-report.component.html',
  styleUrls: ['./sales-company-report.component.scss']
})
export class SalesCompanyReportComponent implements OnInit {

  table: any = [];

  constructor() { }

  ngOnInit(): void {
    this.table = [
      {
        id: 1,
        name: 'PSO Petrol Pump',
        phone: '03338956230',
        email: 'amjad10@gmail.com',
        representative: 'Amjad',
        address: 'Rashid Minhas Rd, Gulshan e Jamal, Karachi',
      },
      {
        id: 2,
        name: 'ATTOCK Petrol Pump',
        phone: '03107451114',
        email: 'waqasahmed@gmail.com',
        representative: 'Waqas',
        address: 'Gulzar e Hijri Sector 34 Scheme 33, Karachi',
      },
      {
        id: 3,
        name: 'TOTAL PARCO Petrol Pump',
        phone: '03222223603',
        email: 'mukhtiyar98@gmail.com',
        representative: 'Mukhtiyar',
        address: 'Sector 3B, Scheme 33, Gulzar E Hijri Karachi',
      },
      {
        id: 4,
        name: 'BYCO Petrol Pump',
        phone: '03005567990',
        email: 'ghulamrasool@gmail.com',
        representative: 'Ghulam Rasool',
        address: 'Shahrah e Faisal, SF Colony, Drigh Road Karachi',
      },
      {
        id: 5,
        name: 'HASCOL Petrol Pump',
        phone: '03115231411',
        email: 'aftabnabi@gmail.com',
        representative: 'Aftab Nabi',
        address: 'Shahrah e Faisal, Rafah e Aam Society, Karachi',
      },
      {
        id: 6,
        name: 'SHELL Petrol Pump',
        phone: '03025689251',
        email: 'jabbar38@gmail.com',
        representative: 'Jabbar',
        address: 'Rashid Minhas Rd, Block A Askari 4, Karachi',
      },
    ]
  }

}
