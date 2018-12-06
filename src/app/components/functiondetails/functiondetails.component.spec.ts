import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctiondetailsComponent } from './functiondetails.component';

describe('FunctiondetailsComponent', () => {
  let component: FunctiondetailsComponent;
  let fixture: ComponentFixture<FunctiondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctiondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
