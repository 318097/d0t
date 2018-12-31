import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../enviroment/environment';

// const serverURL = 'http://at0m.brainbox.in/api/';
const serverURL = 'http://localhost:3000/api/';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const url = `${serverURL}${request.url}?access_token=${localStorage.credentials}`;
    const url = `${serverURL}${request.url}`;
    const token = localStorage.credentials || 'test';
    // console.log('HTTP Interceptor :', request);
    request = request.clone({
      url: url,
      setHeaders: {
        authorization: token
      }
    });
    return next.handle(request);
  }
}
