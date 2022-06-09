import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProduitService } from '../../api/produit.service';

@Injectable({
  providedIn: 'root'
})
export class GetByIdProduitResolver implements Resolve<any> {
  constructor(private _produiService : ProduitService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let id: number = parseInt(route.paramMap.get('id'))
    return this._produiService.GetById(id).pipe()
  }
}
