import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tanker-add-load',
  templateUrl: './tanker-add-load.component.html',
  styleUrls: ['./tanker-add-load.component.scss']
})
export class TankerAddLoadComponent implements OnInit {

  programForm: any = FormGroup;
  table: any = FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      date: ['', Validators.required],
      company: ['', Validators.required],
      invoiceNo: ['', Validators.required],
      vehicleNo: ['', Validators.required],
      externalVehicleNo: ['', Validators.required],
      expenseAmount: ['', Validators.required],
      vehicleRent: ['', Validators.required],
    });
    
    this.table = [
      {
        loadBreakdown: '8,000 (PMG)',
        rate: '145',
        total: '1,160,000'
      },
      {
        loadBreakdown: '16,000 (HSD)',
        rate: '140',
        total: '2,240,000'
      },
    ]
  }

}
