import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './main/components/pages/accueil/accueil.component';
import { NavigationMenuComponent } from './main/components/shared/navigation-menu/navigation-menu.component';
import { FooterMenuComponent } from './main/components/shared/footer-menu/footer-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './services/interceptor/jwt.interceptor';
import { ClientModule } from './modules/client/client.module';
import { EntrepreneurModule } from './modules/entrepreneur/entrepreneur.module';
import { ProduitModule } from './modules/produit/produit.module';
import { RefreshTokenInterceptor } from './services/interceptor/refresh-token.interceptor';

@NgModule({
  declarations: [
    // déclarations des components liés au module principale
      AppComponent,
      AccueilComponent,
      NavigationMenuComponent,
      FooterMenuComponent
  ],
  imports: [
    // outils angular
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,

    // imports des modules enfants
      AuthModule,
      ClientModule,
      EntrepreneurModule,
      ProduitModule
  ],
  exports: [
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true }
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
