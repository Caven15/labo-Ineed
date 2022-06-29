import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { commande } from 'src/app/models/commande/commande.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private _client: HttpClient) { }
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
      let commande = this._client.get<commande>(`${environment.apiUrl}/commande/getById/${id}`)
      return commande
    }

    // récupère une commande par son id client 
    getByClientId(id: number) : Observable<commande>{
      let commande = this._client.get<commande>(`${environment.apiUrl}/commande/getByClientId/${id}`,)
      return commande
    }

    // met a jour une commande par son id
    update(id: number,commande: commande){
      return this._client.patch(`${environment.apiUrl}/commande/updateById/${id}`,{commande: commande})
    }

    // supprimme une commande 
    delete(id: number){
      return this._client.delete(`${environment.apiUrl}/commande/delete/${id}`);
  }
}
