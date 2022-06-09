import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { entrepreneur } from 'src/app/models/entrepreneur.model';
import { produit } from 'src/app/models/produit.model';
import { EntrepreneurService } from 'src/app/services/api/entrepreneur.service';
import { ProduitService } from 'src/app/services/api/produit.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {

  public produits: produit[] = []
  public entrepreneurs: entrepreneur[] = []

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _produitService: ProduitService,
    private _entrepreneurService: EntrepreneurService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.chargerProduit()
    this.chargerEntrepreneur()
  }

  chargerProduit(): void {
    let result: string = this._activatedRoute.snapshot.params['value']
    this._produitService.GetByName(result).subscribe(produits => {
      this.produits = produits
    })
  }

  chargerEntrepreneur(): void {
    let result: string = this._activatedRoute.snapshot.params['value']
    this._entrepreneurService.getByName(result).subscribe(entrepreneurs => {
      this.entrepreneurs = entrepreneurs
    })
  }



}
