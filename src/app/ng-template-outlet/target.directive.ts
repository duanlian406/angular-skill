import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTarget]'
})
export class TargetDirective {

  constructor(private templateRef: TemplateRef<any>) { }

}
