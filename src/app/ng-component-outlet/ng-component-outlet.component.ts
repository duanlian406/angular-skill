import { Component, OnInit, ViewChild, AfterViewInit, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { DynamicComponentDirective } from './dynamic-component.directive';

@Component({
  selector: 'app-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.scss'],
  entryComponents: [ComponentAComponent, ComponentBComponent, ComponentCComponent]
})
export class NgComponentOutletComponent implements OnInit, AfterViewInit {
  @ViewChild(DynamicComponentDirective) dynamicComponentDirective;
  viewContainerRef;
  _target = 'A';
  index = 0;
  get target() {
    return this._target;
  }
  set target(v) {
    this._target = v;
    this.setDynamicComponent(v);
  }
  myContent;
  map = new Map([['A', ComponentAComponent], ['B', ComponentBComponent], ['C', ComponentCComponent]]);
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    const h1 = document.createElement('h1');
    h1.innerText = 'i am content';
    this.myContent = [[h1]];
  }
  setDynamicComponent(v) {
    const component = this.map.get(v);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    if (v === 'A') {
      const h1 = document.createElement('h1');
      h1.innerText = 'i am content';
      const componentRef = this.viewContainerRef.createComponent(componentFactory, this.index, undefined, [[h1]]);
      componentRef.instance.data = '111111';
    } else {
      this.viewContainerRef.createComponent(componentFactory, this.index);
    }
    this.index++;
  }
  ngAfterViewInit() {
    this.viewContainerRef = this.dynamicComponentDirective.viewContainerRef;
    this.setDynamicComponent(this.target);
    this.cdr.detectChanges();
  }
}
