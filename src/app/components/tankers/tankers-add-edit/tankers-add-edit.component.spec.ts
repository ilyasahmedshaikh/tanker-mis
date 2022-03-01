import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankersAddEditComponent } from './tankers-add-edit.component';

describe('TankersAddEditComponent', () => {
  let component: TankersAddEditComponent;
  let fixture: ComponentFixture<TankersAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankersAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankersAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
