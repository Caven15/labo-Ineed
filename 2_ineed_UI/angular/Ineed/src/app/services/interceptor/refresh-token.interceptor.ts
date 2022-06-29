import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, finalize, map, Observable, of, throwError } from 'rxjs';
import { AuthService } from '../api/auth.service';
import { tokenService } from '../other/token-service.service';
import { Router } from '@angular/router';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(
    private _autService : AuthService, 
    private _tokenService : tokenService,
    private _router : Router
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError(
        (datas) => {
          if(datas.status == 401)
          {
            this._autService.refreshToken().subscribe( tokenData => {

              this._tokenService.saveToken(tokenData.accessToken)
              this._tokenService.saveRefreshToken(tokenData.refreshToken)
              this._autService.setToken(tokenData.accessToken)
              console.log("token refresh avec succès !")
              this._router.navigate(['client', 'profil'])
            })
          }
          else if(datas.status == 410){
            console.log("refresh token invalide deconexion forcée !")
            this._autService.logout()
            this._router.navigate(['auth', 'login'])
          }
          return of(datas)
        }
      )
    )
  }
}
