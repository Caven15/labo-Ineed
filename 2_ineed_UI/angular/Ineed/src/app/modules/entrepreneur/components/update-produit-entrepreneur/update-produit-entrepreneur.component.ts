import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { produit } from 'src/app/models/produit.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { ProduitService } from 'src/app/services/api/produit.service';

@Component({
  selector: 'app-update-produit-entrepreneur',
  templateUrl: './update-produit-entrepreneur.component.html',
  styleUrls: ['./update-produit-entrepreneur.component.scss']
})
export class UpdateProduitEntrepreneurComponent implements OnInit {

  public updateProduit : FormGroup
  public produit : produit


  constructor(
    private _route : Router,
    private _authService : AuthService,
    private _formBuilder : FormBuilder,
    private _produitService : ProduitService,
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(!this._authService.isConnected()){
      this._route.navigate(['auth', 'login'])
      return;
    }
    this.chargerProduit()
    this.updateProduit = this._formBuilder.group({
      nom : [null, [Validators.required]],
      description : [null, [Validators.required]],
      prix : [null, [Validators.required]],
      quantite : [null, [Validators.required]],
      categorieId : [null, [Validators.required]],
    })
  }

  chargerProduit(): void {
    let id: number = this._activatedRoute.snapshot.params['id']
    this._produitService.GetById(id).subscribe(produit => {
      this.produit = produit
      console.log(this.produit)
    })
  }

  onSubmit() : void {
    this.produit = new produit()
    this.produit.nom = this.updateProduit.value['nom']
    this.produit.description = this.updateProduit.value['description']
    this.produit.prix = this.updateProduit.value['prix']
    this.produit.quantite = this.updateProduit.value['quantite']
    this.produit.categorieId = this.updateProduit.value['categorieId']
  }

  chargerRouteDetailProduit(): void {
    let id: number = this._activatedRoute.snapshot.params['id']
    this._route.navigate(['detail', id])
  }
}
