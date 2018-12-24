import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { tap, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnotherHttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const auth = req.headers.getAll('auth');
    auth.push('duanchenxi');
    const authReq = req.clone({ setHeaders: { auth } });
    // tslint:disable-next-line:max-line-length
    return next.handle(authReq).pipe(
      filter(res => res instanceof HttpResponse),
      map(res => {
        res.body.interceptors = [...(res.body.interceptors || []), 'b'];
        return res;
      })
    );
  }
  constructor() { }
}
