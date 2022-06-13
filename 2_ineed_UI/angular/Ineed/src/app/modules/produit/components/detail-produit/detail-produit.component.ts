import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { produit } from 'src/app/models/produit/produit.model';
import { ProduitService } from 'src/app/services/api/produit.service';
import { GetByIdProduitResolver } from 'src/app/services/resolver/produit/get-by-id-produit.resolver';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit {

  public produit : produit = new produit()

  constructor(
    private _produitService: ProduitService,
    private _activatedRoute: ActivatedRoute,
    private _produitResolve: GetByIdProduitResolver
  ) { }

  ngOnInit(): void {
    this.chargerProduit()
  }

  chargerProduit(): void {
    this.produit = this._activatedRoute.snapshot.data['datas']
  }
}
