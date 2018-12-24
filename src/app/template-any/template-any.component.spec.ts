import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAnyComponent } from './template-any.component';

describe('TemplateAnyComponent', () => {
  let component: TemplateAnyComponent;
  let fixture: ComponentFixture<TemplateAnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
