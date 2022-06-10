import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-produit-item',
  templateUrl: './produit-item.component.html',
  styleUrls: ['./produit-item.component.scss']
})
export class ProduitItemComponent implements OnInit {

  @Input() produitItem : produit
  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  chargerRouteDetail(id): void {
    this._router.navigate(['detailProduit', id])
  }
}
