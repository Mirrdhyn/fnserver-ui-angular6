import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerdetailsComponent } from './triggerdetails.component';

describe('TriggerdetailsComponent', () => {
  let component: TriggerdetailsComponent;
  let fixture: ComponentFixture<TriggerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
