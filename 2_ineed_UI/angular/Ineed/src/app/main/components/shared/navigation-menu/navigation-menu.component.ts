import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { recherche } from 'src/app/models/recherche.model';
import { AuthService } from 'src/app/services/api/auth.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  public isConnected: boolean = false;
  public roleId : number = parseInt(sessionStorage.getItem('roleId'))
  public resultat : FormGroup
  public recherche : recherche = new recherche()

  constructor(
    private _authService : AuthService, 
    private _route: Router,
    private _formBuilder : FormBuilder,
    private _activatedRoute : ActivatedRoute 
    ) { 

    this._authService.currentUser.subscribe({
        next : (utilisateur) => {
          this.isConnected = this._authService.isConnected();
          this.roleId = parseInt(sessionStorage.getItem('roleId'))
        }
    })
  }

  ngOnInit(): void {
    this.resultat = this._formBuilder.group({
      recherche : [null, [Validators.required]]
    })
  }
  logout(){
    this._authService.logout();
  }

  chargerRouteProfil(){
    this._route.navigate(['client', 'profil'])
  }

  ChargerRouteRegisterEntrepreneur(){
    this._route.navigate(['auth', 'registerEntrepreneur'])
  }

  ChargerRoutePanier(){
    this._route.navigate(['home'])
  }

  chargerRouteProfilVente(){
    this._route.navigate(['entrepreneur', 'profil'])
  }

  chargeRouteProduits(){
    this._route.navigate(['entrepreneur', 'allProduits'])
  }

  chargerRouteConnexion(){
    this._route.navigate(['auth', 'login'])
  }

  chargeRouteInscription(){
    this._route.navigate(['auth', 'registerStepOne'])
  }

  onSubmit(): void {
    this.recherche.recherche = this.resultat.value['recherche']
    // permet de recharger le composant apres recherche de navigation
      this._route.routeReuseStrategy.shouldReuseRoute = () => false
      this._route.onSameUrlNavigation = 'reload'
    this._route.navigate(['produit', 'resultSearch', this.recherche.recherche])
  }

}
