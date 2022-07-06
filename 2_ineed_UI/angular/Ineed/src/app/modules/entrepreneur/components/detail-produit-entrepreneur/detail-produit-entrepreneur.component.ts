import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { imageProduit } from 'src/app/models/produit/imageProduit.Model';
import { produit } from 'src/app/models/produit/produit.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { ProduitService } from 'src/app/services/api/produit.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-produit-entrepreneur',
  templateUrl: './detail-produit-entrepreneur.component.html',
  styleUrls: ['./detail-produit-entrepreneur.component.scss']
})
export class DetailProduitEntrepreneurComponent implements OnInit {

  public apiUrl = environment.apiUrl + "/" 
  public produit : produit = new produit
  public tabImages : File[] = new Array<File>()
  public imageTemp: File 
  public img : SafeUrl = 'assets/svg/building.svg';

  constructor(
    private _authService: AuthService,
    private _route : Router,
    private _sanitization : DomSanitizer,
    private _activatedRoute: ActivatedRoute,
    private _produitService : ProduitService
  ) { }

  ngOnInit(): void {
    if (!this._authService.isConnected()) {
      this._route.navigate(["auth", "login"])
    }
    else{
      this.chargerProduit()
    }
    
  }

  chargerProduit(): void{
    var idProduit = this._activatedRoute.snapshot.params["id"]
    this._produitService.GetById(idProduit).subscribe(produit =>{
      if (this.produit === null) {
        this._route.navigate(["allProduits"])
      }
      else{
        this.produit = produit
        // boucle pour charger toutes les image du prosuit dans un tableau
        for (let i = 0; i < this.produit['imageProduits'].length; i++) {
          this.tabImages.push(this.produit['imageProduits'][i].uid)
        }
      }
    })
  }

  loadMain(event : any){
    console.log("test")
    // Récupérer le fichier
    this.imageTemp = event.target.files[0];
    // Créer un URL lisible par la balise img
    const objectUrl = URL.createObjectURL(this.imageTemp);
    // Update de l'attribut par la nouvelle URL
    this.img = this._sanitization.bypassSecurityTrustUrl(objectUrl); // bypassSecurityTrustUrl évite d'avoir un warning
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
