import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './main/components/pages/accueil/accueil.component';
import { NavItemComponent } from './main/components/shared/nav-item/nav-item.component';
import { NavigationMenuComponent } from './main/components/shared/navigation-menu/navigation-menu.component';
import { FooterMenuComponent } from './main/components/shared/footer-menu/footer-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './tools/jwt.interceptor';
import { ClientModule } from './modules/client/client.module';
import { EntrepreneurModule } from './modules/entrepreneur/entrepreneur.module';

@NgModule({
  declarations: [
    // déclarations des components liés au module principale
      AppComponent,
      AccueilComponent,
      NavItemComponent,
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
      EntrepreneurModule
  ],
  exports: [
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
