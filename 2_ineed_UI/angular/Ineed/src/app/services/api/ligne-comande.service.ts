import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ligneCommande } from 'src/app/models/ligneCommande/ligneCommande.model';
import { environment } from 'src/environments/environment';
import { HeadersReturnsService } from '../other/headers-returns.service';

@Injectable({
  providedIn: 'root'
})
export class LigneComandeService {

  constructor(
    private _client: HttpClient,
    private _headers: HeadersReturnsService
  ) { }

  // ajoute ne commande
  RegisterClient(ligneCommande:ligneCommande) : Observable<any>{
    let headers = this._headers.headersReturn()
    return this._client.post(`${environment.apiUrl}/ligneCommande/add`, ligneCommande, {'headers' : headers});
  }

  // récupère toutes les commandes
  getAll(): Observable<ligneCommande[]>{
    let headers = this._headers.headersReturn()
    let ligneCommandes = this._client.get<ligneCommande[]>(`${environment.apiUrl}/ligneCommande/getAll`, {'headers' : headers})
    return ligneCommandes
  }

  // récupère une commande par son id
  getById(id : number): Observable<ligneCommande>{
    let headers = this._headers.headersReturn()
    let ligneCommande = this._client.get<ligneCommande>(`${environment.apiUrl}/ligneCommande/getById/${id}`, {'headers' : headers})
    return ligneCommande
  }

  // récupère toute les ligne commande par l'id de la commande
  getAllByCommandeId(id : number): Observable<ligneCommande[]>{
    let headers = this._headers.headersReturn()
    let ligneCommandes = this._client.get<ligneCommande[]>(`${environment.apiUrl}/ligneCommande/getByCommandeId:${id}`, {'headers' : headers})
    return ligneCommandes
  }

  // met a jour une ligne de commande
  update(id: number,ligneCommande: ligneCommande){
    let headers = this._headers.headersReturn()
    return this._client.patch(`${environment.apiUrl}/commande/updateById/${id}`,{ligneCommande: ligneCommande}, {'headers' : headers})
  }

  // supprimme une commande
  delete(id: number){
    let headers = this._headers.headersReturn()
    return this._client.delete(`${environment.apiUrl}/ligneCommande/delete/${id}`,{'headers' : headers});
}
}
