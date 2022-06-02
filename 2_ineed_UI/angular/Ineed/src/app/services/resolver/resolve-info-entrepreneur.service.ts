import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EntrepreneurService } from '../api/entrepreneur.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveInfoEntrepreneurService implements Resolve<any> {

  constructor(private _entrepreneurService : EntrepreneurService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id : number = parseInt(sessionStorage.getItem('id'))
    return this._entrepreneurService.getByUtilisateurId(id).pipe()
  }
}
