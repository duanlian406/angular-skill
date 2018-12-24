import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { tap, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({ setHeaders: { auth: ['duanlian'] } });
    return next.handle(authReq).pipe(
      filter(res => res instanceof HttpResponse),
      map(res => {
        res.body.interceptors = [...(res.body.interceptors || []), 'a'];
        return res;
      })
    );
    /* const httpResonse = new HttpResponse({ body: { status: 0 } });
    return of(httpResonse); */
  }
  constructor() { }
}
