import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/api/produit.service';

@Component({
  selector: 'app-all-by-categorie',
  templateUrl: './all-by-categorie.component.html',
  styleUrls: ['./all-by-categorie.component.scss']
})
export class AllByCategorieComponent implements OnInit {

  public produits : produit[] = []

  constructor(
    private _produitService : ProduitService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.chargerProduit()
  }

  chargerProduit(): void{
    let id : number = this._activatedRoute.snapshot.params['id']
    this._produitService.GetByCategorieId(id).subscribe({
      next : (produits) => {
        this.produits = produits
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
