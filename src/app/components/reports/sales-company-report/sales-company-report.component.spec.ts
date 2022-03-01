import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCompanyReportComponent } from './sales-company-report.component';

describe('SalesCompanyReportComponent', () => {
  let component: SalesCompanyReportComponent;
  let fixture: ComponentFixture<SalesCompanyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesCompanyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCompanyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
