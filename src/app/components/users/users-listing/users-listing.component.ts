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
        userName: 'Amjad',
        contactNo: '03338956230',
        email: 'amjad10@gmail.com',
        type: 'Staff',
      },
      {
        id: 2,
        userName: 'Waqas',
        contactNo: '03107451114',
        email: 'waqasahmed@gmail.com',
        type: 'Staff',
      },
      {
        id: 3,
        userName: 'Mukhtiyar',
        contactNo: '03222223603',
        email: 'mukhtiyar98@gmail.com',
        type: 'User',
      },
      {
        id: 4,
        userName: 'Ghulam Rasool',
        contactNo: '03005567990',
        email: 'ghulamrasool@gmail.com',
        type: 'Staff',
      },
      {
        id: 5,
        userName: 'Aftab Nabi',
        contactNo: '03115231411',
        email: 'aftabnabi@gmail.com',
        type: 'User',
      },
      {
        id: 6,
        userName: 'Jabbar',
        contactNo: '03025689251',
        email: 'jabbar38@gmail.com',
        type: 'Staff',
      },
    ]
  }

}
