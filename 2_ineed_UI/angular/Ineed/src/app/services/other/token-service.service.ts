import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class tokenService {

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

  public getDecodeToken(){
    if (this.getToken()) {
      return JSON.parse(JSON.stringify(jwtDecode(this.getToken())))
    }
    return null
  }

  public getIdFromToken() {
    return this.getDecodeToken()?.id
  }

  public getRoleIdFromToken() {
    return this.getDecodeToken()?.roleId
  }

  public getEmailFromToken() {
    return this.getDecodeToken()?.email
  }
}
