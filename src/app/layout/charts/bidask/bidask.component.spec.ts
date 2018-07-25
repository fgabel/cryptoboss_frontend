import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidaskComponent } from './bidask.component';

describe('BidaskComponent', () => {
  let component: BidaskComponent;
  let fixture: ComponentFixture<BidaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
