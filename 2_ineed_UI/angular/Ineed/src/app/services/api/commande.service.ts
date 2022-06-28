import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { commande } from 'src/app/models/commande/commande.model';
import { environment } from 'src/environments/environment';
import { HeadersReturnsService } from '../other/headers-json-returns.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(
    private _client: HttpClient,
    private _headers: HeadersReturnsService
  ) { }
    // ajoute une commande
    RegisterClient(commande:commande) : Observable<any>{
      return this._client.post(`${environment.apiUrl}/commande/add`, commande);
    }

    // récupère toute les commandes
    getAll(): Observable<commande[]>{
      let commandes = this._client.get<commande[]>(`${environment.apiUrl}/commande/getAll`)
      return commandes
    }
    

    // récupère une commande par son id
    getById(id: number) : Observable<commande>{
      let headers = this._headers.headersReturn()
      let commande = this._client.get<commande>(`${environment.apiUrl}/commande/getById/${id}`, {'headers' : headers})
      return commande
    }

    // récupère une commande par son id client 
    getByClientId(id: number) : Observable<commande>{
      let headers = this._headers.headersReturn()
      let commande = this._client.get<commande>(`${environment.apiUrl}/commande/getByClientId/${id}`, {'headers' : headers})
      return commande
    }

    // met a jour une commande par son id
    update(id: number,commande: commande){
      let headers = this._headers.headersReturn()
      return this._client.patch(`${environment.apiUrl}/commande/updateById/${id}`,{commande: commande}, {'headers' : headers})
    }

    // supprimme une commande 
    delete(id: number){
      let headers = this._headers.headersReturn()
      return this._client.delete(`${environment.apiUrl}/commande/delete/${id}`,{'headers' : headers});
  }
}
