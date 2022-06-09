import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ClientService } from '../../api/client.service';
import { tokenService } from '../../other/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class GetByIdClientResolver implements Resolve<any> {
  constructor(private _clientService : ClientService, private _tokenService : tokenService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let id : number = parseInt(this._tokenService.getIdFromToken())
    return this._clientService.GetById(id).pipe()
  }
}
