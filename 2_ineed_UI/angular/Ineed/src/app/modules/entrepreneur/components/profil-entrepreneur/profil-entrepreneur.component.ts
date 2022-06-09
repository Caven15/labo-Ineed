import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { entrepreneur } from 'src/app/models/entrepreneur.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { EntrepreneurService } from 'src/app/services/api/entrepreneur.service';
import { tokenService } from 'src/app/services/other/token-service.service';

@Component({
  selector: 'app-profil-entrepreneur',
  templateUrl: './profil-entrepreneur.component.html',
  styleUrls: ['./profil-entrepreneur.component.scss']
})
export class ProfilEntrepreneurComponent implements OnInit {

  public entrepreneur : entrepreneur = new entrepreneur;
  public nbProduits : number = 0;
  public revenusTotaux : number = 0;
  public nbVentes : number = 0;
  public nomProduitMeilleurVente : string = "";
  public nomProduitPasVendu : string = "";

  constructor(
    private _route : Router,
    private _authService : AuthService,
    private _entrepreneurService : EntrepreneurService,
    private _tokenService : tokenService
  ) { }

  ngOnInit(): void {
    this.refresh()
    this.chargerEntrepreneur()
  }

  chargerEntrepreneur(): void {
    let id: number = parseInt(this._tokenService.getIdFromToken())
    this._entrepreneurService.getByUtilisateurId(id).subscribe(entrepreneur => {
      this.entrepreneur = entrepreneur
    })
  }

  refresh(): void {
    if(!this._authService.isConnected()){
      this._route.navigate(['auth', 'login'])
      return;
    }
  }

  chargerRouteProfil(): void {
    this._route.navigate(['client', 'profil'])
  }

  chargerRouteAllProduit(): void {
    this._route.navigate(['allProduits'])
  }

  chargerRouteUpdate(): void {
    this._route.navigate(['update'])
  }

  chargerRouteDelete(): void {
    this._route.navigate(['delete'])
  }
}
