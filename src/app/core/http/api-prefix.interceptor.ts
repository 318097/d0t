import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../enviroment/environment';

// const serverURL = 'http://at0m.brainbox.in/api/';
const serverURL = 'http://127.0.0.1:8000/api/';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('HTTP Interceptor :', request);
        request = request.clone({
            url: serverURL + request.url
        });
        return next.handle(request);
    }
}
