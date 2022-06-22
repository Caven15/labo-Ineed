import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { categorie } from 'src/app/models/categorie/categorie.model';
import { client } from 'src/app/models/client/client.model';
import { recherche } from 'src/app/models/produit/recherche.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { CategorieService } from 'src/app/services/api/categorie.service';
import { ClientService } from 'src/app/services/api/client.service';
import { tokenService } from 'src/app/services/other/token-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  public isConnected: boolean = false
  public roleId : number = parseInt(this._tokenService.getRoleIdFromToken())
  public resultat : FormGroup
  public recherche : recherche = new recherche()
  public categories : categorie[] = []
  public nbProduitPanier : number = 0
  public nbNotif : number = 0
  public client : client = new client() 
  public apiUrl = environment.apiUrl + "/" 

  constructor(
    private _authService : AuthService, 
    private _route: Router,
    private _formBuilder : FormBuilder,
    private _activatedRoute : ActivatedRoute,
    private _tokenService : tokenService,
    private _categorieService: CategorieService,
    private _clientService : ClientService 
    ) {}

  ngOnInit(): void {

  this._authService.currentUser.subscribe({
    next : (utilisateur) => {
      this.isConnected = this._authService.isConnected();
      this.roleId = parseInt(this._tokenService.getRoleIdFromToken())
    }
  })

  this.resultat = this._formBuilder.group({
    recherche : [null, [Validators.required]]
  })

  this.chargerCategories()
  this.chargerClient()
  }

  chargerClient(): void{
    let id : number = this._tokenService.getIdFromToken()
    this._clientService.GetById(id).subscribe(client => {
      this.client = client
    })
  }

  chargerCategories(): void {
    this._categorieService.getAll().subscribe({
      next: (categories) => {
        this.categories = categories
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  chargerAllProduitsByCategorie(id): void {
    this._route.navigate(['produit', 'allByCategorie', id])
    this._route.routeReuseStrategy.shouldReuseRoute = () => false
      this._route.onSameUrlNavigation = 'reload'
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
    // permet de recharger le composant après recherche de navigation
      this._route.routeReuseStrategy.shouldReuseRoute = () => false
      this._route.onSameUrlNavigation = 'reload'
    this._route.navigate(['produit', 'resultSearch', this.recherche.recherche])
  }

}
