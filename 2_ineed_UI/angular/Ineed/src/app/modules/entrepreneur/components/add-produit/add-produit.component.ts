import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { imagePRoduit } from 'src/app/models/produit/imagePRoduit';
import { produit } from 'src/app/models/produit/produit.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { ProduitService } from 'src/app/services/api/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {

  public img : SafeUrl = 'assets/svg/card-image.svg';
  public imageTemp: File
  public tabImages : imagePRoduit[] = new Array<imagePRoduit>()
  public addProduit : FormGroup
  public produit : produit = new produit()

  constructor(
    private _route : Router,
    private _authService : AuthService,
    private _produitService : ProduitService,
    private _formBuilder : FormBuilder,
    private _activatedRoute : ActivatedRoute,
    private _sanitization : DomSanitizer
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
      entrepreneurId : [null, [Validators.required]],
      image : [null, [Validators.required]]
    })
  }

  loadImage(event: any){
    let i : number = 0
    while (event.target.files[i] != undefined) {
      this.imageTemp = event.target.files[i];
      const objectUrl = URL.createObjectURL(this.imageTemp);
      this.img = this._sanitization.bypassSecurityTrustUrl(objectUrl);
      const obj = {
        name : event.target.files[i].name,
        htmlObj : this.img,
        fileImg : event.target.files[i]
      }
      this.tabImages.push(obj)
      i++
    }
  }

  deleteImage(img : any): void {
    for (let i = 0; i < this.tabImages.length; i++) {
      if (this.tabImages[i].name == img.name) {
        this.tabImages.splice(i, 1)
      }
    }
  }

  onSubmit(): void {
    const formulaireProduit = new FormData()
    formulaireProduit.append('nom', this.addProduit.value['nom'])
    formulaireProduit.append('description', this.addProduit.value['description'])
    formulaireProduit.append('prix', this.addProduit.value['prix'])
    formulaireProduit.append('quantite', this.addProduit.value['quantite'])
    formulaireProduit.append('categorieId', this.addProduit.value['categorieId'])
    formulaireProduit.append('entrepreneurId', this._activatedRoute.snapshot.params["entrepreneurId"])
    for (let i = 0; i < this.tabImages.length; i++) {
      formulaireProduit.append('images', this.tabImages[i].fileImg)
    }
    this._produitService.add(formulaireProduit).subscribe({
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
