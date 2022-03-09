import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-load-card',
  templateUrl: './load-card.component.html',
  styleUrls: ['./load-card.component.scss']
})
export class LoadCardComponent implements OnInit {

  programForm: any = FormGroup;

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

}
