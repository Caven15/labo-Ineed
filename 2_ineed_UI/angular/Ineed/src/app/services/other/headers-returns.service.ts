import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    console.log("recup token !")
    console.log(token)

    token = "Bearer " + token

    // construit et renvoi le token dans le headers
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      
      'Authorization': token
    }) 
    return headers
  }
}
