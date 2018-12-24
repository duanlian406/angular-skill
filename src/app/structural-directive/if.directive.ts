import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  @Input() appIfData;
  @Input() appIfElse;
  @Input() set appIf(v) {
    this.viewContainerRef.clear();
    if (v) {
      const templateRef = this.viewContainerRef.createEmbeddedView(this.templateRef);
      templateRef.context['data'] = this.appIfData;
    } else {
      const templateRef = this.viewContainerRef.createEmbeddedView(this.appIfElse);
      templateRef.context['data'] = this.appIfData;
    }
  }
  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

}
