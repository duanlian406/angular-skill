import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionStrategyComponent implements OnInit {
  @Input() data;
  makeForCheck() {
    this.cdr.markForCheck();
  }
  detectChanges() {
    this.cdr.detectChanges();
  }
  attach() {
    this.cdr.reattach();
  }
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

}
