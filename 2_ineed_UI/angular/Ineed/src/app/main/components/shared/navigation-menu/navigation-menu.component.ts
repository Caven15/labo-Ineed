import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavItem } from 'src/app/models/inav-item';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  public routes : INavItem[] = [];

  public isConnected: boolean = false;

  constructor(private _route: Router) { }

  ngOnInit(): void {
    this.routes = [
      // {title: "Acceuil", url: "home", isVisible: true},
      {title: "Inscription", url: "/auth/register", isVisible: !this.isConnected},
      {title: "Connexion", url: "/auth/login", isVisible: !this.isConnected}
    ];
  }

}
