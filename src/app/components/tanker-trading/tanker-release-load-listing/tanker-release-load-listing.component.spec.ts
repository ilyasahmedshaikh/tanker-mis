import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankerReleaseLoadListingComponent } from './tanker-release-load-listing.component';

describe('TankerReleaseLoadListingComponent', () => {
  let component: TankerReleaseLoadListingComponent;
  let fixture: ComponentFixture<TankerReleaseLoadListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankerReleaseLoadListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankerReleaseLoadListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
