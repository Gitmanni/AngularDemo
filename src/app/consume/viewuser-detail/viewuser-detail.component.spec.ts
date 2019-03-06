import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserDetailComponent } from './viewuser-detail.component';

describe('ViewuserDetailComponent', () => {
  let component: ViewuserDetailComponent;
  let fixture: ComponentFixture<ViewuserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
