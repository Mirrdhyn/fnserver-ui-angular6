import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FnlogsComponent } from './fnlogs.component';

describe('FnlogsComponent', () => {
  let component: FnlogsComponent;
  let fixture: ComponentFixture<FnlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FnlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
