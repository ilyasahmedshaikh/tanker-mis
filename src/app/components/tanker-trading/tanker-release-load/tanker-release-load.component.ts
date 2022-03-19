import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tanker-release-load',
  templateUrl: './tanker-release-load.component.html',
  styleUrls: ['./tanker-release-load.component.scss']
})
export class TankerReleaseLoadComponent implements OnInit {

  programForm: any = FormGroup;
  vehicles: any = [];

  isExternal: boolean = false;

  pmgLoadTemp: number = 8000;
  hsdLoadTemp: number = 16000;

  // data from Backend
  pmgLoad: number = 8000;
  hsdLoad: number = 16000;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();

    this.onCalSellPerLitre();
    this.onCalCommission();

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
      vehicleNo: ['', Validators.required],
      externalVehicleNo: ['', Validators.required],
      litresSell: [0, Validators.required],
      typeSell: ['', Validators.required],
      purchaseRate: [145, Validators.required],
      rentPerLitre: [1.20, Validators.required],
      perLitreWithRent: [0, Validators.required],
      perLitreSellPrice: [0, Validators.required],
      commissionPerLitre: ['', Validators.required],
      commissionTotal: ['', Validators.required],
      soldAddress: ['', Validators.required],
      otherDetails: ['', Validators.required],
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

  onCalSellPerLitre() {
    // calculating perLitreSellPrice
    let calc = this.programForm.value.purchaseRate + this.programForm.value.rentPerLitre;

    this.programForm.patchValue({
      perLitreSellPrice: calc,
      perLitreWithRent: calc
    });

    // calculating commision on every change trigger 
    this.onCalCommission()
  }

  onCalCommission() {
    // calculating commision
    let commisionPerLtr = this.programForm.value.perLitreSellPrice - this.programForm.value.perLitreWithRent;
    let commisionTotal = commisionPerLtr * this.programForm.value.litresSell

    this.programForm.patchValue({
      commissionPerLitre: commisionPerLtr.toFixed(2),
      commissionTotal: commisionTotal.toFixed(2)
    });
  }

  onUpdateCardLtrs(event: any) {
    let sellType = event.target.value;

    this.pmgLoadTemp = this.pmgLoad;
    this.hsdLoadTemp = this.hsdLoad;
    
    if(sellType == 'pmg') {
      this.pmgLoadTemp = this.pmgLoad - this.programForm.value.litresSell;
    }
    if(sellType == 'hsd') {
      this.hsdLoadTemp = this.hsdLoad - this.programForm.value.litresSell;
    }
  }

}
