import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyFormControlComponent } from './diy-form-control.component';

describe('DiyFormControlComponent', () => {
  let component: DiyFormControlComponent;
  let fixture: ComponentFixture<DiyFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiyFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiyFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
