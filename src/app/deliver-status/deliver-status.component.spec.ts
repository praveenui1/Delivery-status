import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverStatusComponent } from './deliver-status.component';

describe('DeliverStatusComponent', () => {
  let component: DeliverStatusComponent;
  let fixture: ComponentFixture<DeliverStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
