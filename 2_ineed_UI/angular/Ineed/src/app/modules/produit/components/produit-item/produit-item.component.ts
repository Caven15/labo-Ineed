import { Component, Input, OnInit } from '@angular/core';
import { produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-produit-item',
  templateUrl: './produit-item.component.html',
  styleUrls: ['./produit-item.component.scss']
})
export class ProduitItemComponent implements OnInit {

  @Input() produitItem : produit
  constructor() { }

  ngOnInit(): void {
  }

  chargerRouteDetail(id): void {
    console.log("components a mettre en place")
  }
}
