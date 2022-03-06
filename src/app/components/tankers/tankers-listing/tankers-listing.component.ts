import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tankers-listing',
  templateUrl: './tankers-listing.component.html',
  styleUrls: ['./tankers-listing.component.scss']
})
export class TankersListingComponent implements OnInit {

  table: any = [];

  constructor() { }

  ngOnInit(): void {
    this.table = [
      {
        id: 1,
        noPlate: 'KU-4101',
        nameType: '6 Wheeler | 10000 LTS.',
      },
      {
        id: 2,
        noPlate: 'KU-9999',
        nameType: '6 Wheeler | 15000 LTS.',
      },
      {
        id: 3,
        noPlate: 'KW-6001',
        nameType: '8 Wheeler | 5000 LTS.',
      },
      {
        id: 4,
        noPlate: 'JV-0801',
        nameType: '6 Wheeler | 20000 LTS.',
      },
      {
        id: 5,
        noPlate: 'JF-9001',
        nameType: '8 Wheeler | 15000 LTS.',
      },
      {
        id: 6,
        noPlate: 'JS-5501',
        nameType: '4 Wheeler | 10000 LTS.',
      },
    ]
  }

}
