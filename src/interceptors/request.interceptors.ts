import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      const token = JSON.parse(currentUser)['token'];
      const authReq = req.clone({
        setHeaders: {
          'Content-Type': 'application/vnd.api+json',
          'Authorization': 'Bearer ' + token
        }
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
