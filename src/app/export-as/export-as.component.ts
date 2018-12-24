import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ColorfulDirective } from './colorful.directive';

@Component({
  selector: 'app-export-as',
  templateUrl: './export-as.component.html',
  styleUrls: ['./export-as.component.scss']
})
export class ExportAsComponent implements OnInit, AfterViewInit {
  @ViewChild(ColorfulDirective) colorful;
  constructor() { }
  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log(this.colorful);
  }
}

