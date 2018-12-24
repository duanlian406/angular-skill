import { Component, OnInit, Injector } from '@angular/core';

class DateService {
  getTime() {
    return Date.now();
  }
}

@Component({
  selector: 'app-injector',
  templateUrl: './injector.component.html',
  styleUrls: ['./injector.component.scss']
})
export class InjectorComponent implements OnInit {
  injector;
  time;
  constructor() { }

  ngOnInit() {
    this.injector = Injector.create({
      providers: [
        { provide: DateService, useClass: DateService, deps: [] }
      ]
    });
    this.time = this.injector.get(DateService).getTime();
  }

}
