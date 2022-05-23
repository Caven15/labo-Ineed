import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavItem } from 'src/app/models/inav-item';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  public routes : INavItem[] = [];

  public isConnected: boolean = false;

  constructor(private _authService : AuthService, private _route: Router) { 
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

  ngOnInit(): void {}

  refresh(): void{
    let testUtilisateur: number = parseInt(sessionStorage.getItem("roleId"))
    console.log(testUtilisateur)
    if (testUtilisateur == 1) {
      this.routes = [
        {title: "Mon Profil", url: "", isVisible: true},
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
        {title: "Inscription", url: "/auth/register", isVisible: true},
        {title: "Connexion", url: "/auth/login", isVisible: true}
      ];
    }
    
  }

  logout(){
    this._authService.logout();
  }
}
