import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-listing',
  templateUrl: './companies-listing.component.html',
  styleUrls: ['./companies-listing.component.scss']
})
export class CompaniesListingComponent implements OnInit {

  table: any = [];

  constructor() { }

  ngOnInit(): void {
    this.table = [
      {
        id: 1,
        companyName: 'PSO Petrol Pump',
        contactNo: '03338956230',
        email: 'amjad10@gmail.com',
        contactPerson: 'Amjad',
        address: 'Rashid Minhas Rd, Gulshan e Jamal, Karachi',
      },
      {
        id: 2,
        companyName: 'ATTOCK Petrol Pump',
        contactNo: '03107451114',
        email: 'waqasahmed@gmail.com',
        contactPerson: 'Waqas',
        address: 'Gulzar e Hijri Sector 34 Scheme 33, Karachi',
      },
      {
        id: 3,
        companyName: 'TOTAL PARCO Petrol Pump',
        contactNo: '03222223603',
        email: 'mukhtiyar98@gmail.com',
        contactPerson: 'Mukhtiyar',
        address: 'Sector 3B, Scheme 33, Gulzar E Hijri Karachi',
      },
      {
        id: 4,
        companyName: 'BYCO Petrol Pump',
        contactNo: '03005567990',
        email: 'ghulamrasool@gmail.com',
        contactPerson: 'Ghulam Rasool',
        address: 'Shahrah e Faisal, SF Colony, Drigh Road Karachi',
      },
      {
        id: 5,
        companyName: 'HASCOL Petrol Pump',
        contactNo: '03115231411',
        email: 'aftabnabi@gmail.com',
        contactPerson: 'Aftab Nabi',
        address: 'Shahrah e Faisal, Rafah e Aam Society, Karachi',
      },
      {
        id: 6,
        companyName: 'SHELL Petrol Pump',
        contactNo: '03025689251',
        email: 'jabbar38@gmail.com',
        contactPerson: 'Jabbar',
        address: 'Rashid Minhas Rd, Block A Askari 4, Karachi',
      },
    ]
  }

}
