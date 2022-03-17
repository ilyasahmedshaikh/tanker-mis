import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-load-card',
  templateUrl: './load-card.component.html',
  styleUrls: ['./load-card.component.scss']
})
export class LoadCardComponent implements OnInit {

  @Input('loadType') loadType: any = "";
  @Output() getCardData = new EventEmitter<any>();

  programForm: any = FormGroup;
  totalAmount: number = 0;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      litre: [0, Validators.required],
      rateLitre: [0, Validators.required]
    });
  }

  onDataChange() {
    this.totalAmount = this.programForm.value.litre * this.programForm.value.rateLitre;

    let data = {
      loadType: this.loadType,
      litre: this.programForm.value.litre,
      rateLitre: this.programForm.value.rateLitre,
      total: this.totalAmount
    }

    this.getCardData.emit(data);
  }

}
