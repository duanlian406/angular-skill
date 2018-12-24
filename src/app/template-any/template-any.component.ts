import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-any',
  templateUrl: './template-any.component.html',
  styleUrls: ['./template-any.component.scss']
})
export class TemplateAnyComponent implements OnInit {
  data = {};
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.data = { value: 1 };
    }, 1000);
  }

}
