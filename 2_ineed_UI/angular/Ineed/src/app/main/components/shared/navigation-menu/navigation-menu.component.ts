import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { INavItem } from 'src/app/models/inav-item';
import { recherche } from 'src/app/models/recherche.model';
import { AuthService } from 'src/app/services/api/auth.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  public routes : INavItem[] = [];
  public isConnected: boolean = false;
  public resultat : FormGroup
  public recherche : recherche = new recherche()

  constructor(
    private _authService : AuthService, 
    private _route: Router,
    private _formBuilder : FormBuilder,
    private _activatedRoute : ActivatedRoute 
    ) { 

    this._authService.currentUser.subscribe(
      {
        next : (utilisateur) => {
          this.isConnected = this._authService.isConnected();
          this.refresh();
          console.log("est connecté : " + this.isConnected);
        }
      }
    )
  }

  ngOnInit(): void {
    this.refresh();
    this.resultat = this._formBuilder.group({
      recherche : [null, [Validators.required]]
    })
  }

  refresh(): void{
    let testUtilisateur: number = parseInt(sessionStorage.getItem("roleId"))
    if (testUtilisateur == 1) {
      this.routes = [
        {title: "Mon Profil", url: "/client/profil", isVisible: true},
        {title: "Mes commandes", url: "", isVisible: true},
        {title: "Suivis commande", url: "", isVisible: true},
        {title: "catégories", url: "", isVisible: true},
      ];
    }
    else if (testUtilisateur == 2) {
      this.routes = [
        // ici les routes relative au entrepreneur
      ];
    }
    else if (testUtilisateur == 3) {
      this.routes = [
        // ici les routes relative au médérateur
      ];
    }
    else if (testUtilisateur == 4) {
      this.routes = [
        // ici les routes relative au administrateur
      ];
    }
    else{
      this.routes = [
        {title: "Connexion", url: "/auth/login", isVisible: true},
        {title: "Inscription", url: "/auth/registerStepOne", isVisible: true}
      ];
    }
  }

  logout(){
    this._authService.logout();
  }

  onSubmit(): void {
    this.recherche.recherche = this.resultat.value['recherche']
    // permet de recharger le composant apres recherche de navigation
      this._route.routeReuseStrategy.shouldReuseRoute = () => false
      this._route.onSameUrlNavigation = 'reload'
    this._route.navigate(['produit', 'resultSearch', this.recherche.recherche])
  }
}
