import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { AllByCategorieComponent } from './components/all-by-categorie/all-by-categorie.component';
import { AllByEntrepreneurComponent } from './components/all-by-entrepreneur/all-by-entrepreneur.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { ProduitItemComponent } from './components/produit-item/produit-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EntrepreneurItemComponent } from '../entrepreneur/components/entrepreneur-item/entrepreneur-item.component';
import { EntrepreneurModule } from '../entrepreneur/entrepreneur.module';


@NgModule({
  declarations: [
    AllByCategorieComponent,
    AllByEntrepreneurComponent,
    ResultSearchComponent,
    ProduitItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProduitRoutingModule,
    EntrepreneurModule
  ]
})
export class ProduitModule { }
