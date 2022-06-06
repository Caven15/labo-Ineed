import { Injectable } from '@angular/core';
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
}
