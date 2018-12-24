import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config;
  getConfig() {
    return () => this.http.get('api/getConfig').pipe(pluck('config'), tap(config => this.config = config)).toPromise();
  }
  constructor(private http: HttpClient) { }
}
