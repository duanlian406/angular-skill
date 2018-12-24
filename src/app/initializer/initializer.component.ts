import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-initializer',
  templateUrl: './initializer.component.html',
  styleUrls: ['./initializer.component.scss']
})
export class InitializerComponent implements OnInit {
  get config() {
    return this.service.config;
  }
  constructor(private service: ConfigService) { }

  ngOnInit() {}

}
