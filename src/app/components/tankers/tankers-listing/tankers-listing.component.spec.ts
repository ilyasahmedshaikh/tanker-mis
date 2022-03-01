import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankersListingComponent } from './tankers-listing.component';

describe('TankersListingComponent', () => {
  let component: TankersListingComponent;
  let fixture: ComponentFixture<TankersListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankersListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
