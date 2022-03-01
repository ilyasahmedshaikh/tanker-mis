import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTankerReportComponent } from './sales-tanker-report.component';

describe('SalesTankerReportComponent', () => {
  let component: SalesTankerReportComponent;
  let fixture: ComponentFixture<SalesTankerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesTankerReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTankerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
