import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankerAddLoadListingComponent } from './tanker-add-load-listing.component';

describe('TankerAddLoadListingComponent', () => {
  let component: TankerAddLoadListingComponent;
  let fixture: ComponentFixture<TankerAddLoadListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankerAddLoadListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankerAddLoadListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
