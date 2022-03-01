import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesAddEditComponent } from './companies-add-edit.component';

describe('CompaniesAddEditComponent', () => {
  let component: CompaniesAddEditComponent;
  let fixture: ComponentFixture<CompaniesAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
