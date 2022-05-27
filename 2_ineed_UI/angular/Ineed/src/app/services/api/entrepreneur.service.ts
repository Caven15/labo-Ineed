import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { entrepreneur } from 'src/app/models/entrepreneur.model';
import { environment } from 'src/environments/environment';
import { HeadersReturnsService } from '../other/headers-returns.service';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurService {


  constructor(
    private _client: HttpClient,
    private _headers: HeadersReturnsService
    ) { }

  // récupère tout les entrepreneurs
  getAll(): Observable<entrepreneur[]>{
    var entrepreneur = this._client.get<entrepreneur[]>(`${environment.apiUrl}/entrepreneur/getAll`)
    return entrepreneur
  }

  // récupère un entrepreneur par son id
  getById(id : number) : Observable<entrepreneur>{
    let headers = this._headers.headersReturn()
    var entrepreneur = this._client.get<entrepreneur>(`${environment.apiUrl}/entrepreneur/getById/${id}`,{'headers' : headers})
    return entrepreneur;
  }

  // récupère un entrepreneur par son id utilisateur
  getByUtilisateurId(id : number) : Observable<entrepreneur>{
    let headers = this._headers.headersReturn()
    var entrepreneur = this._client.get<entrepreneur>(`${environment.apiUrl}/entrepreneur/getByUtilisateurId/${id}`,{'headers' : headers})
    return entrepreneur;
  }

  // met a jour un entrepreneur par son id
  update(id: number, entrepreneur: entrepreneur){
    let headers = this._headers.headersReturn()
    return this._client.patch(`${environment.apiUrl}/entrepreneur/updateById/${id}`,{ entrepreneur : entrepreneur},{'headers' : headers})
  }

  // supprime un entrepreneur par son id
  delete(id:number){
    let headers = this._headers.headersReturn()
    return this._client.delete(`${environment.apiUrl}/entrepreneur/delete/${id}`,{'headers' : headers})
  }
}
