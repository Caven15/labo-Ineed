import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { produit } from 'src/app/models/produit/produit.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { ProduitService } from 'src/app/services/api/produit.service';

@Component({
  selector: 'app-detail-produit-entrepreneur',
  templateUrl: './detail-produit-entrepreneur.component.html',
  styleUrls: ['./detail-produit-entrepreneur.component.scss']
})
export class DetailProduitEntrepreneurComponent implements OnInit {
  public produit : produit = new produit

  constructor(
    private _authService: AuthService,
    private _route : Router,
    private _activatedRoute: ActivatedRoute,
    private _produitService : ProduitService
  ) { }

  ngOnInit(): void {
    if (!this._authService.isConnected()) {
      this._route.navigate(["auth", "login"])
    }
    
    var idProduits = this._activatedRoute.snapshot.params["id"]
    this._produitService.GetById(idProduits).subscribe(produit =>{
      this.produit = produit
      if (this.produit === null) {
        this._route.navigate(["allProduits"])
      }
    })
  }
  chargerRouteUpdate(): void {
    var idProduits = this._activatedRoute.snapshot.params["id"]
    this._route.navigate(['updateProduit', idProduits])
  }

  chargerRouteDelete(): void {
    var idProduits = this._activatedRoute.snapshot.params["id"]
    this._route.navigate(['delete', idProduits])
  }
}
