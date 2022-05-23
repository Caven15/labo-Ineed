import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './main/components/pages/accueil/accueil.component';
import { NavItemComponent } from './main/components/shared/nav-item/nav-item.component';
import { NavigationMenuComponent } from './main/components/shared/navigation-menu/navigation-menu.component';
import { FooterMenuComponent } from './main/components/shared/footer-menu/footer-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavItemComponent,
    NavigationMenuComponent,
    FooterMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
