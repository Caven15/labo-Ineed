import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EntrepreneurService } from '../../api/entrepreneur.service';

@Injectable({
  providedIn: 'root'
})
export class GetByIdUtilisateurResolver implements Resolve<any> {
  constructor(private _entrepreneurService : EntrepreneurService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let id : number = parseInt(sessionStorage.getItem('id'))
    return this._entrepreneurService.getByUtilisateurId(id).pipe()
  }
}
