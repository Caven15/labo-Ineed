import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registerClientForm } from '../../models/auth/registerClientForm.model';
import { registerEntrepreneurForm } from '../../models/auth/registerEntrepreneurForm.model';
import { client } from '../../models/client/client.model';
import { loginForm } from '../../models/auth/loginForm.model';
import { HeadersReturnsService } from '../other/headers-returns.service';
import { tokenService } from '../other/token-service.service';
import { refreshToken } from 'src/app/models/auth/refreshToken.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUserSubject : BehaviorSubject<client>
  public currentUser : Observable<client>
  public tokenRefresh : refreshToken = new refreshToken()
  
  public get currentUserValue(): client {
    return this._currentUserSubject.value;
  }

  constructor(
    private _client: HttpClient, 
    private _route: Router,
    private _headers: HeadersReturnsService,
    private _tokenService : tokenService
    ) { 
    this._currentUserSubject = new BehaviorSubject<client>(JSON.parse(this._tokenService.getToken()));
    this.currentUser = this._currentUserSubject.asObservable();
  }

    // login d'un utilisateur
    Login(userLogin:loginForm) : Observable<client>{
      return this._client.post<any>(`${environment.apiUrl}/Auth/login`, userLogin)
      .pipe(map(client => {
      // Enregistrement du token + refreshToken
      this._tokenService.saveToken(client.accessToken)
      this._tokenService.saveRefreshToken(client.refreshToken)
      this._currentUserSubject.next(client);
      return client;
      }));
    }

  // enregistrement d'un nouveau client
  RegisterClient(client:registerClientForm) : Observable<any>{
    return this._client.post(`${environment.apiUrl}/Auth/registerClient`, client);
  }

  // enregistrement d'un nouvel entrepreneur
  RegisterEntrepreneur(entrepreneur:any) : Observable<any>{
    let headers = this._headers.headersReturn()
    return this._client.post(`${environment.apiUrl}/Auth/registerEntrepreneur`,entrepreneur);
  }

  // refresh token 
  refreshToken() : Observable<any>{
    console.log("------------------------------------")
    console.log("j'entre dans mon refresh mon token !")
    console.log("------------------------------------")

    let token : string = this._tokenService.getRefreshToken()
    for (let i = 0; i < token.length; i++) {
      token = token.replace('"', '')
    }
    this.tokenRefresh.refreshToken = token
    return this._client.post(`${environment.apiUrl}/Auth/refreshToken`,this.tokenRefresh);
  }

  // logout d'un utilisateur
  logout(){
    sessionStorage.clear()
    this._currentUserSubject.next(null);
    this._route.navigate(['auth', 'login']);
  }

  // ferification qu'un utilisateur est bien connecté
  isConnected() : boolean {
    return (this.currentUserValue != null);
  }

  // vérification qu'un modérateur est bien connecté
  isModerateurConnected() : boolean{
    let id:number = parseInt(this._tokenService.getRoleIdFromToken())
    if (id == 2) {
      return true
    }
    else
      return false
  }

  // vérification qu'un administrateur est bie nconnecté
  isAdminConnected() : boolean{
    let id:number = parseInt(this._tokenService.getRoleIdFromToken())
    if (id == 3) {
      return true
    }
    else
      return false
  }
}
