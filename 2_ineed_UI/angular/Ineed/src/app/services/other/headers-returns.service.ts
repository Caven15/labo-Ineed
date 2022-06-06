import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeadersReturnsService {

  constructor(
    private _client : HttpClient
  ) { }
  headersReturn(){
    let token : string = sessionStorage.getItem("currentUser")
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
