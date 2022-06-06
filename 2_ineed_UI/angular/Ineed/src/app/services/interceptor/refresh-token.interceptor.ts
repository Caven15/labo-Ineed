import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, finalize, map, Observable, throwError } from 'rxjs';
import { AuthService } from '../api/auth.service';
import { tokenService } from '../other/token-service.service';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(private _autService : AuthService, private _tokenService : tokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(map(event => {
      return event;
    }), catchError(err => {
      if (err.status === 401) {
        this._autService.refreshToken().subscribe( tokenData => {
          console.log("je récupère mes token après ma demande au serveur !")
          this._tokenService.saveToken(tokenData.accessToken)
          this._tokenService.saveRefreshToken(tokenData.refreshToken)
        })
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
