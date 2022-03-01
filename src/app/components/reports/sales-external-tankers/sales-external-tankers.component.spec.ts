import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesExternalTankersComponent } from './sales-external-tankers.component';

describe('SalesExternalTankersComponent', () => {
  let component: SalesExternalTankersComponent;
  let fixture: ComponentFixture<SalesExternalTankersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesExternalTankersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesExternalTankersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
