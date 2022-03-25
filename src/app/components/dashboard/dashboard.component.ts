import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  date: any = FormGroup;
  data: any = [];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();

    this.data = [
      {
        id: 1,
        title: 'Tankers Trading',
        fields: [
          {
            name: 'Loads Purchased',
            quantity: 700
          },
          {
            name: 'Loads Sold',
            quantity: 600
          }
        ] 
      },
      {
        id: 2,
        title: 'PMG (Petrol) Liters',
        fields: [
          {
            name: 'PMG Purchased',
            quantity: 10000
          },
          {
            name: 'PMG Sold',
            quantity: 9999
          }
        ] 
      },
      {
        id: 3,
        title: 'HSD (Diesel) Liters',
        fields: [
          {
            name: 'HSD Purchased',
            quantity: 11000
          },
          {
            name: 'HSD Sold',
            quantity: 10999
          }
        ] 
      }
    ]
  }

  formInit() {
    this.date = this.fb.group({
      dateTo: ['', Validators.required],
      dateFrom: ['', Validators.required]
    });
  }
}
