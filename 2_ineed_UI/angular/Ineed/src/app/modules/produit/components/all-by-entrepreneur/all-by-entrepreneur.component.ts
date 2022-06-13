import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { produit } from 'src/app/models/produit/produit.model';
import { ProduitService } from 'src/app/services/api/produit.service';

@Component({
  selector: 'app-all-by-entrepreneur',
  templateUrl: './all-by-entrepreneur.component.html',
  styleUrls: ['./all-by-entrepreneur.component.scss']
})
export class AllByEntrepreneurComponent implements OnInit {

  public produits : produit[] = []

  constructor(
    private _produitService : ProduitService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.chargerProduit()
  }

  chargerProduit(): void {
    let id : number = this._activatedRoute.snapshot.params['id']
    this._produitService.GetByEntrepreneurId(id).subscribe({
      next : (produits) => {
        this.produits = produits
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
