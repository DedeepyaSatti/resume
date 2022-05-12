import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/service/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.userService.getToken();
    let tokenizedRequest=request.clone({
      setHeaders:{
        "Authorization":'Bearer ${token.trim()}'
      }
    });
    return next.handle(tokenizedRequest);
  }
}
