import { Directive, TemplateRef, Input, ViewContainerRef, DoCheck, IterableDiffers } from '@angular/core';
import { NgForOfContext } from '@angular/common';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements DoCheck {
  _items;
  differ;
  map = new Map();
  @Input() set appForOf(v) {
    this._items = v;
    if (this._items && !this.differ) {
      this.differ = this.differs.find(this._items).create();
    }
  }
  @Input() appForTrackBy;
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef, private differs: IterableDiffers) { }
  ngDoCheck() {
    if (this.differ) {
      const changes = this.differ.diff(this._items);
      if (changes) {
        changes.forEachAddedItem(change => {
          // tslint:disable-next-line:max-line-length
          const i = this._items.findIndex(item => item === change.item);
          const context = new NgForOfContext(change.item, this._items, i, this._items.length);
          const templateRef = this.viewContainerRef.createEmbeddedView(
            this.templateRef,
            context,
            i
          );
          this.map.set(change.item, templateRef);
        });
        changes.forEachRemovedItem(change => {
          const templateRef = this.map.get(change.item);
          this.map.delete(change.item);
          const index = this.viewContainerRef.indexOf(templateRef);
          this.viewContainerRef.remove(index);
        });
      }
    }
  }
}
