import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { ClientService } from '../api/client.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveInfoUtilisateurService implements Resolve<any> {

  constructor(private _clientService : ClientService) { }
  resolve(route: ActivatedRouteSnapshot) {
    let id : number = parseInt(sessionStorage.getItem('id'))
    return this._clientService.GetById(id).pipe()
  }
}
