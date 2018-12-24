import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {
  show = true;
  items = [{ name: 'aaa', value: 111 }, { name: 'bbb', value: 222 }, { name: 'ccc', value: 333 }];
  createItem() {
    const item = { name: 'ddd', value: 444 };
    const i = Math.floor(Math.random() * this.items.length);
    this.items.splice(i, 0, item);
  }
  constructor() { }

  ngOnInit() {
  }

}
