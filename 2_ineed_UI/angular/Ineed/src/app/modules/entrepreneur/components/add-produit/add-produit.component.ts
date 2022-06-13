import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { produit } from 'src/app/models/produit/produit.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { ProduitService } from 'src/app/services/api/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {

  public addProduit : FormGroup
  public produit : produit = new produit()

  constructor(
    private _route : Router,
    private _authService : AuthService,
    private _produitService : ProduitService,
    private _formBuilder : FormBuilder,
    private _activatedRoute : ActivatedRoute 
  ) { }

  ngOnInit(): void {
    if(!this._authService.isConnected()){
      this._route.navigate(['auth', 'login'])
      return;
    }
    this.addProduit = this._formBuilder.group({
      nom : [null, [Validators.required]],
      description : [null, [Validators.required]],
      prix : [null, [Validators.required]],
      quantite : [null, [Validators.required]],
      categorieId : [null, [Validators.required]],
      entrepreneurId : [null, [Validators.required]]
    })
  }

  onSubmit(): void {
    this.produit.nom = this.addProduit.value['nom']
    this.produit.description = this.addProduit.value['description']
    this.produit.prix = this.addProduit.value['prix']
    this.produit.quantite = this.addProduit.value['quantite']
    this.produit.categorieId = this.addProduit.value['categorieId']
    this.produit.entrepreneurId = this._activatedRoute.snapshot.params["entrepreneurId"]
    console.log(this.produit)
    this._produitService.add(this.produit).subscribe({
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log("produit ajouté avec succès")
        this._route.navigate(['allProduits'])
      }
    })
  }
  chargerRouteAllProduits(): void {
    this._route.navigate(['allProduits'])
  }
}
