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

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();

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
      litresSell: ['', Validators.required],
      typeSell: ['', Validators.required],
      purchaseRate: [145, Validators.required],
      rentPerLitre: [1.20, Validators.required],
      perLitreSellPrice: ['', Validators.required],
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

}
