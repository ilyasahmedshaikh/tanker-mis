import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tanker-add-load',
  templateUrl: './tanker-add-load.component.html',
  styleUrls: ['./tanker-add-load.component.scss']
})
export class TankerAddLoadComponent implements OnInit {

  programForm: any = FormGroup;
  companies: any = [];
  vehicles: any = [];

  isExternal: boolean = false;

  loadTypePmg: any = "PMG (Petrol)";
  loadTypeHsd: any = "HSD (Diesel)";

  pmgCardData: any = {
    loadType: '',
    litre: 0,
    rateLitre: 0,
    total: 0
  };
  hsdCardData: any = {
    loadType: '',
    litre: 0,
    rateLitre: 0,
    total: 0
  };

  grandTotal: number = 0;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();

    this.companies = [
      {
        id: 1,
        company: 'PSO Petrol Pump'
      },
      {
        id: 2,
        company: 'ATTOCK Petrol Pump'
      },
      {
        id: 3,
        company: 'TOTAL PARCO Petrol Pump'
      },
      {
        id: 4,
        company: 'BYCO Petrol Pump'
      },
      {
        id: 5,
        company: 'HASCOL Petrol Pump'
      },
      {
        id: 6,
        company: 'SHELL Petrol Pump'
      }
    ]
    this.vehicles = [
      {
        id: 1,
        vehicleNo: 'JF-9001'
      },
      {
        id: 2,
        vehicleNo: 'KW-6001'
      },
      {
        id: 3,
        vehicleNo: 'JV-0801'
      },
      {
        id: 4,
        vehicleNo: 'PN-8976'
      }
    ]
  }

  formInit() {
    this.programForm = this.fb.group({
      date: ['', Validators.required],
      company: ['', Validators.required],
      invoiceNo: ['', Validators.required],
      vehicleNo: ['', Validators.required],
      externalVehicleNo: ['', Validators.required],
      expenseAmount: [0, Validators.required],
      vehicleRent: [1.20, Validators.required],
    });
  }

  onExternal() {
    this.isExternal = !this.isExternal;
  }

  checkIfExternal(event: any) {
    console.log(event.target.value);
    
    if(event.target.value == 'external') {
      this.onExternal();
    }
  }

  onPmgCardData(event: any) {
    this.pmgCardData = event;

    // calculating grandTotal on every change from child card component 
    this.calculateTotal();
  }

  onHsdCardData(event: any) {
    this.hsdCardData = event;

    // calculating grandTotal on every change from child card component 
    this.calculateTotal();
  }

  calculateTotal() {
    let loadRent = this.programForm.value.vehicleRent * (this.pmgCardData.litre + this.hsdCardData.litre);
    let loadAmount = this.pmgCardData.total + this.hsdCardData.total;

    this.grandTotal = loadRent + loadAmount + this.programForm.value.expenseAmount;
  }

}
