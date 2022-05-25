import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { client } from '../../models/client.model';

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

  // recherche un client par son id
  GetById(id : number) : Observable<client>{
    let token : string = sessionStorage.getItem("currentUser")
    for (let i = 0; i < token.length; i++) {
      token = token.replace('"', '')
    }
    token = "Bearer " + token

    // construit et renvoi le token dans le headers
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      
      'Authorization': token
    }) 
    var client = this._client.get<client>(`${environment.apiUrl}/client/getById/${id}`,{'headers' : headers});
    
    return client;
  }

  // mis a jour des donnée d'un client
  updateDataClient(id: number,nom: string, prenom: string, dateNaissance: Date, email: string){
    console.log("je passe dans mon update !")
  
    let token : string = sessionStorage.getItem("currentUser")
    for (let i = 0; i < token.length; i++) {
      token = token.replace('"', '')
    }
  
    token = "Bearer " + token

    // construit et renvoi le token dans le headers
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      
      'Authorization': token
    }) 
    return this._client.patch(`${environment.apiUrl}/client/updateById/${id}`,{
      nom: nom,
      prenom: prenom,
      dateNaissance: dateNaissance,
      email: email
      },{'headers' : headers}
    )
  }

  // mis a jour des données de livraison d'un client
  updateDataLivraison(id: number,rue: string, numeroRue: number, ville: string, codePostal: number){
    console.log("je passe dans mon update !")
  
    let token : string = sessionStorage.getItem("currentUser")
    for (let i = 0; i < token.length; i++) {
      token = token.replace('"', '')
    }
  
    token = "Bearer " + token

    // construit et renvoi le token dans le headers
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      
      'Authorization': token
    }) 
    return this._client.patch(`${environment.apiUrl}/client/updateById/${id}`,{
      rue: rue,
      numeroRue: numeroRue,
      ville: ville,
      codePostal: codePostal
      },{'headers' : headers}
    )
  }

  // supression d'un profil client
    // le delete se fait sur le service utilisateur (supression automatique du client lié)
}
