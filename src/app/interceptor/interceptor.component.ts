import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.scss'],
})
export class InterceptorComponent implements OnInit {
  httpOptions;
  send(username, password) {
    this.http.post('api/login', { username, password }, this.httpOptions).subscribe(console.log);
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
