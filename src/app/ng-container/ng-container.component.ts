import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss']
})
export class NgContainerComponent implements OnInit {
  items = [{ name: 'aaa', value: 111 }, { name: 'bbb', value: 222 }, { name: 'ccc', value: 333 }];
  constructor() { }

  ngOnInit() {
  }

}
