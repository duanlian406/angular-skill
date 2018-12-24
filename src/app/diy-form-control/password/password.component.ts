import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, Validator, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PasswordComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordComponent), multi: true },
  ]
})
export class PasswordComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() min;
  @Input() max;
  get _password() {
    return { password: this.password, confirm: this.confirm };
  }
  disabled = false;
  password;
  confirm;
  validator(c) {
    if (c.value.password.length < this.min || c.value.password.length > this.max) {
      return { lengthError: { message: `密码长度必须大于${this.min}并且小于${this.max}` } };
    } else {
      if (c.value.password === c.value.confirm) {
        return null;
      } else {
        return { matchError: { message: '两次密码不匹配！' } };
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }
  writeValue(v) {
    if (v) {
      this.password = v;
    }
  }
  emitChange(v) { }
  emitTouch() { }
  registerOnChange(fn) {
    this.emitChange = fn;
  }
  registerOnTouched(fn) {
    this.emitTouch = fn;
  }
  setDisabledState(state) {
    this.disabled = state;
  }
  validate(c) {
    return this.password == null || this.confirm == null ? null : this.validator(c);
  }
}
