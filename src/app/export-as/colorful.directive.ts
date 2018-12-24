import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColorful]',
  exportAs: 'appColorful'
})
export class ColorfulDirective {
  private timer = null;
  @Input() appColorful;
  @HostBinding('style.color') get color() {
    return this.appColorful;
  }
  autoChangeColor(time) {
    this.stopChangeColor();
    this.timer = setInterval(() => {
      this.appColorful = this.getRandomColor();
    }, time);
  }
  stopChangeColor() {
    clearInterval(this.timer);
  }
  private getRandomColor() {
    return `rgb(${this.random(0, 255)},${this.random(0, 255)},${this.random(0, 255)})`;
  }
  private random(m, n) {
    return Math.floor(Math.random() * (n - m + 1) + m);
  }
  constructor() { }

}
