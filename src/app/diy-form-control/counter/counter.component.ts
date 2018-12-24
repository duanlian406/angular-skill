import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CounterComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CounterComponent), multi: true }
  ]
})
export class CounterComponent implements OnInit, ControlValueAccessor, Validator, OnChanges {
  @Input() min;
  @Input() max;
  _count = 0;
  disabled = false;
  validator;
  get count() {
    return this._count;
  }
  set count(v) {
    this._count = v;
    this.emitChange(v);
  }
  emitChange(v) { }
  emitTouched() { }
  increment() {
    this.count++;
    this.emitTouched();
  }
  decrement() {
    this.count--;
    this.emitTouched();
  }
  createValidator(min, max) {
    return this.validator = (c) => {
      return c.value < min || c.value > max ? { customRangeError: { current: c.value, min, max } } : null;
    };
  }
  constructor() { }

  ngOnInit() { }
  ngOnChanges(changes) {
    if ('min' in changes || 'max' in changes) {
      this.createValidator(this.min, this.max);
      this.count = this._count;
    }
  }
  writeValue(value) {
    if (value) {
      this.count = value;
    }
  }
  setDisabledState(state) {
    this.disabled = state;
  }
  registerOnChange(fn) {
    this.emitChange = fn;
  }
  registerOnTouched(fn) {
    this.emitTouched = fn;
  }
  validate(c) {
    return this.min == null || this.max == null ? null : this.validator(c);
  }
}
