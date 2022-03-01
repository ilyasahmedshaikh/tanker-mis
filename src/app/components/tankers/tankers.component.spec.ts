import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankersComponent } from './tankers.component';

describe('TankersComponent', () => {
  let component: TankersComponent;
  let fixture: ComponentFixture<TankersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
