import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportAsComponent } from './export-as.component';

describe('ExportAsComponent', () => {
  let component: ExportAsComponent;
  let fixture: ComponentFixture<ExportAsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportAsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
