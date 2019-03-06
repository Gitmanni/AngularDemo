import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteServiceComponent } from './remote-service.component';

describe('RemoteServiceComponent', () => {
  let component: RemoteServiceComponent;
  let fixture: ComponentFixture<RemoteServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
