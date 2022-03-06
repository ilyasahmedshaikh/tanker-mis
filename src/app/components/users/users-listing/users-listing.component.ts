import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit {

  table: any = [];

  constructor() { }

  ngOnInit(): void {
    this.table = [
      {
        id: 1,
        name: 'Amjad',
        phone: '03338956230',
        email: 'amjad10@gmail.com',
        type: 'Staff',
      },
      {
        id: 2,
        name: 'Waqas',
        phone: '03107451114',
        email: 'waqasahmed@gmail.com',
        type: 'Staff',
      },
      {
        id: 3,
        name: 'Mukhtiyar',
        phone: '03222223603',
        email: 'mukhtiyar98@gmail.com',
        type: 'User',
      },
      {
        id: 4,
        name: 'Ghulam Rasool',
        phone: '03005567990',
        email: 'ghulamrasool@gmail.com',
        type: 'Staff',
      },
      {
        id: 5,
        name: 'Aftab Nabi',
        phone: '03115231411',
        email: 'aftabnabi@gmail.com',
        type: 'User',
      },
      {
        id: 6,
        name: 'Jabbar',
        phone: '03025689251',
        email: 'jabbar38@gmail.com',
        type: 'Staff',
      },
    ]
  }

}
