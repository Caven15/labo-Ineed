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
    this.routes = [
      // {title: "Acceuil", url: "home", isVisible: true},
      {title: "Inscription", url: "/auth/register", isVisible: !this.isConnected},
      {title: "Connexion", url: "/auth/login", isVisible: !this.isConnected}
    ];
  }

  logout(){
    this._authService.logout();
  }
}
