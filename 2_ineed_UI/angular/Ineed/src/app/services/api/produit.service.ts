import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produit } from 'src/app/models/produit/produit.model';
import { environment } from 'src/environments/environment';
import { HeadersReturnsService } from '../other/headers-json-returns.service';
import { HeadersFormDataReturnService } from '../other/headers-form-data-return.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(
    private _client: HttpClient,
    private _headersJson: HeadersReturnsService,
    private _headersFromData : HeadersFormDataReturnService
  ) { }

  // ajoute un produit
  add(produit : FormData) : Observable<any>{
    console.log(produit)
    return this._client.post(`${environment.apiUrl}/produit/add`, produit);
  }

  // récupère tout les produits
  getAll(): Observable<produit[]>{
    var produits = this._client.get<produit[]>(`${environment.apiUrl}/produit/getAll`)
    return produits
  }

  // récupère un produit par son id
  GetById(id : number) : Observable<produit>{
    var produit = this._client.get<produit>(`${environment.apiUrl}/produit/getById/${id}`);
    return produit;
  }

  // récupère un produit par son nom
  GetByName(name : string) : Observable<produit[]>{
    var produit = this._client.get<produit[]>(`${environment.apiUrl}/produit/getByName/${name}`);
    return produit;
  }

  // récupère tout les produits par son catégorieId
  GetByCategorieId(id : number) : Observable<produit[]>{
    var produits = this._client.get<produit[]>(`${environment.apiUrl}/produit/getByCategorieId/${id}`);
    return produits;
  }

  // récupère tout les produits par son entrepreneneurId
  GetByEntrepreneurId(id : number) : Observable<produit[]>{
    var produits = this._client.get<produit[]>(`${environment.apiUrl}/produit/getByEntrepreneurId/${id}`);
    return produits;
  }

  // met a jour un produits par son id
  update(id: number,produit: produit){
    console.log("je passe dans mon update !")
    return this._client.patch(`${environment.apiUrl}/produit/updateById/${id}`,{produit: produit})
  }

  // supprime un produit par son id
  delete(id: number){
    return this._client.delete(`${environment.apiUrl}/produit/delete/${id}`);
}
}
