import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankerTradingComponent } from './tanker-trading.component';

describe('TankerTradingComponent', () => {
  let component: TankerTradingComponent;
  let fixture: ComponentFixture<TankerTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankerTradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankerTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
