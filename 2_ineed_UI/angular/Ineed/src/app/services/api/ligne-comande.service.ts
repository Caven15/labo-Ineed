import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ligneCommande } from 'src/app/models/ligneCommande/ligneCommande.model';
import { environment } from 'src/environments/environment';
import { HeadersReturnsService } from '../other/headers-json-returns.service';

@Injectable({
  providedIn: 'root'
})
export class LigneComandeService {

  constructor(private _client: HttpClient) { }

  // ajoute ne commande
  RegisterClient(ligneCommande:ligneCommande) : Observable<any>{
    return this._client.post(`${environment.apiUrl}/ligneCommande/add`, ligneCommande);
  }

  // récupère toutes les commandes
  getAll(): Observable<ligneCommande[]>{
    let ligneCommandes = this._client.get<ligneCommande[]>(`${environment.apiUrl}/ligneCommande/getAll`)
    return ligneCommandes
  }

  // récupère une commande par son id
  getById(id : number): Observable<ligneCommande>{
    let ligneCommande = this._client.get<ligneCommande>(`${environment.apiUrl}/ligneCommande/getById/${id}`)
    return ligneCommande
  }

  // récupère toute les ligne commande par l'id de la commande
  getAllByCommandeId(id : number): Observable<ligneCommande[]>{
    let ligneCommandes = this._client.get<ligneCommande[]>(`${environment.apiUrl}/ligneCommande/getByCommandeId:${id}`)
    return ligneCommandes
  }

  // met a jour une ligne de commande
  update(id: number,ligneCommande: ligneCommande){
    return this._client.patch(`${environment.apiUrl}/commande/updateById/${id}`,{ligneCommande: ligneCommande})
  }

  // supprimme une commande
  delete(id: number){
    return this._client.delete(`${environment.apiUrl}/ligneCommande/delete/${id}`);
  }
}
