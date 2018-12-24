import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-detector',
  templateUrl: './change-detector.component.html',
  styleUrls: ['./change-detector.component.scss']
})
export class ChangeDetectorComponent implements OnInit {
  count = 0;
  add() {
    this.count++;
  }
  detach() {
    this.cdr.detach();
  }
  attach() {
    this.cdr.reattach();
  }
  trigger() {
    this.cdr.detectChanges();
  }
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

}
