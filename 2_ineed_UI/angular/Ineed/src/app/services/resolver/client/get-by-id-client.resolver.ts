import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ClientService } from '../../api/client.service';

@Injectable({
  providedIn: 'root'
})
export class GetByIdClientResolver implements Resolve<any> {
  constructor(private _clientService : ClientService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let id : number = parseInt(sessionStorage.getItem('id'))
    return this._clientService.GetById(id).pipe()
  }
}
