import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankerAddLoadComponent } from './tanker-add-load.component';

describe('TankerAddLoadComponent', () => {
  let component: TankerAddLoadComponent;
  let fixture: ComponentFixture<TankerAddLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankerAddLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankerAddLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
