import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registerClientForm } from '../../models/registerClientForm.model';
import { registerEntrepreneurForm } from '../../models/registerEntrepreneurForm.model';
import { client } from '../../models/client.model';
import { loginForm } from '../../models/loginForm.model';
import jwtDecode from 'jwt-decode';
import { HeadersReturnsService } from '../other/headers-returns.service';
import { tokenService } from '../other/token-service.service';
import { refreshToken } from 'src/app/models/refreshToken.model';

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
    this._currentUserSubject = new BehaviorSubject<client>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this._currentUserSubject.asObservable();
  }

    // login d'un utilisateur
    Login(userLogin:loginForm) : Observable<client>{
      return this._client.post<any>(`${environment.apiUrl}/Auth/login`, userLogin)
      .pipe(map(client => {
      // Inserer l'utilisateur dans le sessionStorage
      this._tokenService.saveToken(client.accessToken)
      this._tokenService.saveRefreshToken(client.refreshToken)
      const tokenDecode = JSON.parse(JSON.stringify(jwtDecode(client.accessToken)));
      sessionStorage.setItem('id', JSON.stringify(tokenDecode.id));
      sessionStorage.setItem('email', JSON.stringify(tokenDecode.email));
      sessionStorage.setItem('roleId', JSON.stringify(tokenDecode.roleId));
      this._currentUserSubject.next(client);
      return client;
      }));
    }

  // enregistrement d'un nouveau client
  RegisterClient(client:registerClientForm) : Observable<any>{
    return this._client.post(`${environment.apiUrl}/Auth/registerClient`, client);
  }

  // enregistrement d'un nouvel entrepreneur
  RegisterEntrepreneur(entrepreneur:registerEntrepreneurForm) : Observable<any>{
    let headers = this._headers.headersReturn()
    return this._client.post(`${environment.apiUrl}/Auth/registerEntrepreneur`,entrepreneur,{'headers' : headers});
  }

  // refresh token 
  refreshToken() : Observable<any>{
    console.log("je refresh mon token !")
    let token : string = sessionStorage.getItem("refreshToken")
    console.log(token)
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
    let id:number = parseInt(sessionStorage.getItem("roleId"))
    if (id == 2) {
      return true
    }
    else
      return false
  }

  // vérification qu'un administrateur est bie nconnecté
  isAdminConnected() : boolean{
    let id:number = parseInt(sessionStorage.getItem("roleId"))
    if (id == 3) {
      return true
    }
    else
      return false
  }
}
