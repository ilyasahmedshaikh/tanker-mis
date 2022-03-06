import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-companies-add-edit',
  templateUrl: './companies-add-edit.component.html',
  styleUrls: ['./companies-add-edit.component.scss']
})
export class CompaniesAddEditComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      companyName: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: ['', Validators.required],
      contactPerson: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

}
