import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeServiceComponent } from './consume-service.component';

describe('ConsumeServiceComponent', () => {
  let component: ConsumeServiceComponent;
  let fixture: ComponentFixture<ConsumeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
