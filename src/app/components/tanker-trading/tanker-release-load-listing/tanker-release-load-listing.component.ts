import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tanker-release-load-listing',
  templateUrl: './tanker-release-load-listing.component.html',
  styleUrls: ['./tanker-release-load-listing.component.scss']
})
export class TankerReleaseLoadListingComponent implements OnInit {

  table: any = [];

  constructor() { }

  ngOnInit(): void {
    this.table = [
      {
        id: 1,
        date: '03-02-2022',
        company: 'PSO Petrol Pump',
        invoiceNo: '91108765',
        vehicleNo: 'KU-4101',
        pmg: '8,000',
        hsd: '16,000',
        grandTotal: '3,431,000',
      },
      {
        id: 2,
        date: '15-02-2022',
        company: 'ATTOCK Petrol Pump',
        invoiceNo: '01108335',
        vehicleNo: 'KU-9999',
        pmg: '8,000',
        hsd: '16,000',
        grandTotal: '3,431,000',
      },
      {
        id: 3,
        date: '28-02-2022',
        company: 'TOTAL PARCO Petrol Pump',
        invoiceNo: '25897878',
        vehicleNo: 'KW-6001',
        pmg: '8,000',
        hsd: '16,000',
        grandTotal: '3,431,000',
      },
      {
        id: 4,
        date: '01-03-2022',
        company: 'BYCO Petrol Pump',
        invoiceNo: '74750212',
        vehicleNo: 'JV-0801',
        pmg: '8,000',
        hsd: '16,000',
        grandTotal: '3,431,000',
      },
      {
        id: 5,
        date: '08-03-2022',
        company: 'HASCOL Petrol Pump',
        invoiceNo: '32236556',
        vehicleNo: 'JF-9001',
        pmg: '8,000',
        hsd: '16,000',
        grandTotal: '3,431,000',
      },
      {
        id: 6,
        date: '28-02-2022',
        company: 'TOTAL PARCO Petrol Pump',
        invoiceNo: '25897878',
        vehicleNo: 'KW-6001',
        pmg: '8,000',
        hsd: '16,000',
        grandTotal: '3,431,000',
      },
    ]
  }

}
