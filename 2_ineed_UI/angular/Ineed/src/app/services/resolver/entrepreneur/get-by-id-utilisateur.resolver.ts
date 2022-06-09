import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EntrepreneurService } from '../../api/entrepreneur.service';
import { tokenService } from '../../other/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class GetByIdUtilisateurResolver implements Resolve<any> {
  constructor(private _entrepreneurService : EntrepreneurService, private _tokenService : tokenService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let id : number = parseInt(this._tokenService.getIdFromToken())
    return this._entrepreneurService.getByUtilisateurId(id).pipe()
  }
}
