import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { client } from '../../models/client/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _client: HttpClient) { }

  // récupérer tout les clients
  getAll(): Observable<client[]>{
    var client = this._client.get<client[]>(`${environment.apiUrl}/client/getAll`)
    return client
  }

  // récupère un client par son id
  GetById(id : number) : Observable<client>{
    var client = this._client.get<client>(`${environment.apiUrl}/client/getById/${id}`);
    return client;
  }

  // mis a jour des donnée d'un client
  updateDataClient(id: number,nom: string, prenom: string, dateNaissance: Date, email: string){
    console.log("je passe dans mon update !")
    return this._client.patch(`${environment.apiUrl}/client/updateById/${id}`,{
      nom: nom,
      prenom: prenom,
      dateNaissance: dateNaissance,
      email: email
      }
    )}

  // mis a jour des donnée d'un client
  updateRoleClient(id: number,roleId : number){
    return this._client.patch(`${environment.apiUrl}/client/updateRoleById/${id}`,{roleId: roleId})
  }

  // mis a jour des données de livraison d'un client
  updateDataLivraison(id: number,rue: string, numeroRue: number, ville: string, codePostal: number){
    console.log("je passe dans mon update !")
    return this._client.patch(`${environment.apiUrl}/client/updateById/${id}`,{
      rue: rue,
      numeroRue: numeroRue,
      ville: ville,
      codePostal: codePostal
      }
    )}

    // mis a jour des donnée d'un client
    updateImageClient(id: number, image : any){
      console.log("je passe dans mon update d'image client !")
      return this._client.patch(`${environment.apiUrl}/client/updateById/${id}`,image )
    }

  // supression d'un profil client
    // le delete se fait sur le service utilisateur (supression automatique du client lié)
}
