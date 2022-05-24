import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { client } from '../../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private _client: HttpClient) { }
  // récupérer tout les clients
  getAll(): Observable<client[]>{
    var client = this._client.get<client[]>(`${environment.apiUrl}/client`)
    return client
  }

  // recherche un client 
  GetById(id : number) : Observable<client>{
    var client = this._client.get<client>(`${environment.apiUrl}/Utilisateur/${id}`);
    return client;
}
}
