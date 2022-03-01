import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankerReleaseLoadComponent } from './tanker-release-load.component';

describe('TankerReleaseLoadComponent', () => {
  let component: TankerReleaseLoadComponent;
  let fixture: ComponentFixture<TankerReleaseLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankerReleaseLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankerReleaseLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
