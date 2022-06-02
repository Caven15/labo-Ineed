import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produit } from 'src/app/models/produit.model';
import { environment } from 'src/environments/environment';
import { HeadersReturnsService } from '../other/headers-returns.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(
    private _client: HttpClient,
    private _headers: HeadersReturnsService
  ) { }

  // ajoute un produit
  add(produit : produit) : Observable<any>{
    let headers = this._headers.headersReturn()
    return this._client.post(`${environment.apiUrl}/produit/add`, produit, {'headers' : headers});
  }

  // récupère tout les produits
  getAll(): Observable<produit[]>{
    var produits = this._client.get<produit[]>(`${environment.apiUrl}/produit/getAll`)
    return produits
  }

  // récupère un produit par son id
  GetById(id : number) : Observable<produit>{
    let headers = this._headers.headersReturn()
    var produit = this._client.get<produit>(`${environment.apiUrl}/produit/getById/${id}`, {'headers' : headers});
    return produit;
  }

  // récupère un produit par son id
  GetByName(name : string) : Observable<produit[]>{
    let headers = this._headers.headersReturn()
    var produit = this._client.get<produit[]>(`${environment.apiUrl}/produit/getByName/${name}`, {'headers' : headers});
    return produit;
  }

  // récupère tout les produits par son catégorieId
  GetByCategorieId(id : number) : Observable<produit[]>{
    let headers = this._headers.headersReturn()
    var produits = this._client.get<produit[]>(`${environment.apiUrl}/produit/getByCategorieId/${id}`, {'headers' : headers});
    return produits;
  }

  // récupère tout les produits par son entrepreneneurId
  GetByEntrepreneurId(id : number) : Observable<produit[]>{
    let headers = this._headers.headersReturn()
    var produits = this._client.get<produit[]>(`${environment.apiUrl}/produit/getByEntrepreneurId/${id}`, {'headers' : headers});
    return produits;
  }

  // met a jour un produits par son id
  update(id: number,produit: produit){
    console.log("je passe dans mon update !")
    let headers = this._headers.headersReturn()
    return this._client.patch(`${environment.apiUrl}/produit/updateById/${id}`,{produit: produit}, {'headers' : headers})
  }

  // supprime un produit par son id
  delete(id: number){
    let headers = this._headers.headersReturn()
    return this._client.delete(`${environment.apiUrl}/produit/delete/${id}`, {'headers' : headers});
}
}
