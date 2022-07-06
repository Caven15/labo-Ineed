import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { entrepreneur } from 'src/app/models/entrepreneur/entrepreneur.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurService {


  constructor(private _client: HttpClient) { }

  // récupère tout les entrepreneurs
  getAll(): Observable<entrepreneur[]>{
    let entrepreneurs = this._client.get<entrepreneur[]>(`${environment.apiUrl}/entrepreneur/getAll`)
    return entrepreneurs
  }

  // récupère un entrepreneur par son id
  getById(id : number) : Observable<entrepreneur>{
    let entrepreneur = this._client.get<entrepreneur>(`${environment.apiUrl}/entrepreneur/getById/${id}`)
    return entrepreneur;
  }

    // récupère un entrepreneur par son id
    getByName(name : string) : Observable<entrepreneur[]>{
      let entrepreneur = this._client.get<entrepreneur[]>(`${environment.apiUrl}/entrepreneur/getByName/${name}`)
      return entrepreneur;
    }

  // récupère un entrepreneur par son id utilisateur
  getByUtilisateurId(id : number) : Observable<entrepreneur>{
    let entrepreneur = this._client.get<entrepreneur>(`${environment.apiUrl}/entrepreneur/getByUtilisateurId/${id}`)
    return entrepreneur;
  }

  // met a jour un entrepreneur par son id
  update(id: number, entrepreneur: entrepreneur){
    return this._client.patch(`${environment.apiUrl}/entrepreneur/updateById/${id}`,{ entrepreneur : entrepreneur})
  }

  // mis a jour des donnée d'un client
  updateImageEntrepreneur(id: number, image : any){
    return this._client.patch(`${environment.apiUrl}/entrepreneur/updateById/${id}`,image )
  }

  // supprime un entrepreneur par son id
  delete(id:number){
    return this._client.delete(`${environment.apiUrl}/entrepreneur/delete/${id}`)
  }
}
