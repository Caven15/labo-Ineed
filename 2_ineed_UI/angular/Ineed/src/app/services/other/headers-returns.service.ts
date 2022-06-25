import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenService } from './token-service.service';

@Injectable({
  providedIn: 'root'
})
export class HeadersReturnsService {

  constructor(
    private _client : HttpClient,
    private _tokenService : tokenService
  ) { }
  headersReturn(){
    let token : string = this._tokenService.getToken()
    for (let i = 0; i < token.length; i++) {
      token = token.replace('"', '')
    }
    token = "Bearer " + token

    // construit et renvoi le token dans le headers
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': token
    }) 
    return headers
  }
}
