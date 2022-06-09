import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class tokenService {

  public tokenDecode = JSON.parse(JSON.stringify(jwtDecode(this.getToken())));

  constructor() { }

  public saveToken(token: string): void {
    sessionStorage.setItem('currentUser', JSON.stringify(token));
  }

  public saveRefreshToken(token: string): void {
    sessionStorage.setItem('refreshToken', JSON.stringify(token));
  }

  public getToken(): string {
    return sessionStorage.getItem('currentUser');
  }

  public getRefreshToken(): string {
    return sessionStorage.getItem('refreshToken');
  }

  public getIdFromToken() {
    return this.tokenDecode.id
  }

  public getRoleIdFromToken() {
    return this.tokenDecode.roleId
  }

  public getEmailFromToken() {
    return this.tokenDecode.email
  }
}
