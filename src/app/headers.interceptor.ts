import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authReq: HttpRequest<string> = request.clone({
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }),
    });

    return next.handle(authReq);
  }
}
