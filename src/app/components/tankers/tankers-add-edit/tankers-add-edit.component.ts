import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tankers-add-edit',
  templateUrl: './tankers-add-edit.component.html',
  styleUrls: ['./tankers-add-edit.component.scss']
})
export class TankersAddEditComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      tankerNoPlate: ['', Validators.required],
      tankerNameType: ['', Validators.required],
    });
  }

}
