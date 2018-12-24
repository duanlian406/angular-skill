import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTemplateOutlet]'
})
export class TemplateOutletDirective {
  @Input() appTemplateOutletData;
  @Input() set appTemplateOutlet(v) {
    this.viewContainerRef.clear();
    const templateRef = this.viewContainerRef.createEmbeddedView(v);
    templateRef.context['data'] = this.appTemplateOutletData;
  }
  constructor(private viewContainerRef: ViewContainerRef) { }

}
