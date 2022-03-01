import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesListingComponent } from './companies-listing.component';

describe('CompaniesListingComponent', () => {
  let component: CompaniesListingComponent;
  let fixture: ComponentFixture<CompaniesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
