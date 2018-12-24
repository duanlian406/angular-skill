import { Component, OnInit, ViewChildren, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TargetDirective } from './target.directive';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.scss']
})
export class NgTemplateOutletComponent implements OnInit, AfterViewInit {
  @ViewChildren(TargetDirective) templateList;
  target;
  index = 0;
  color;
  changeToBlueColor() {
    this.color = 'blue';
  }
  changeToRedColor() {
    this.color = 'red';
  }
  changeTemplate() {
    this.index = ++this.index % this.templateList.length;
    this.setTemplate(this.index);
  }
  setTemplate(i) {
    this.target = this.templateList.find((item, index) => index === i).templateRef;
  }
  constructor(private cdr: ChangeDetectorRef) { }
  ngAfterViewInit() {
    this.setTemplate(this.index);
    this.cdr.detectChanges();
  }
  ngOnInit() {
  }

}
