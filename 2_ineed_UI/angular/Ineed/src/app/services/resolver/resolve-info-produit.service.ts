import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProduitService } from '../api/produit.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveInfoProduitService implements Resolve<any> {

  constructor(private _produiService : ProduitService, private _activatedRoute : ActivatedRoute) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id: number = parseInt(route.paramMap.get('id'))
    return this._produiService.GetById(id).pipe()
  }
}
