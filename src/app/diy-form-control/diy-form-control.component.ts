import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-diy-form-control',
  templateUrl: './diy-form-control.component.html',
  styleUrls: ['./diy-form-control.component.scss']
})
export class DiyFormControlComponent implements OnInit {
  defaultValue = null;
  disabled = false;
  form;
  toggleDisabled() {
    this.disabled = !this.disabled;
  }
  validateCounterRange(c) {
    return c.value < 0 || c.value > 10 ? { rangeError: { current: c.value, min: 0, max: 10 } } : null;
  }
  asyncValidate(c) {
    if (c.value.password === '111111') {
      return of({ paternError: { message: '密码不能为111111' } }).pipe(delay(1500));
    } else {
      return of(null).pipe(delay(1500));
    }
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      counter: [this.defaultValue, [this.validateCounterRange, Validators.required]],
      password: ['', null, this.asyncValidate]
    });
  }

}
