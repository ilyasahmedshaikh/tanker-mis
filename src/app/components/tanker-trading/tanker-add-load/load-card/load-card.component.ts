import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-load-card',
  templateUrl: './load-card.component.html',
  styleUrls: ['./load-card.component.scss']
})
export class LoadCardComponent implements OnInit {

  @Input('loadType') loadType: any = "";

  programForm: any = FormGroup;
  totalAmount: any = 0;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      litre: ['', Validators.required],
      rateLitre: ['', Validators.required]
    });
  }

  onDataChange() {
    this.totalAmount = this.programForm.value.litre * this.programForm.value.rateLitre;
  }

}
