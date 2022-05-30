import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepreneurRoutingModule } from './entrepreneur-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilEntrepreneurComponent } from './components/profil-entrepreneur/profil-entrepreneur.component';
import { UpdateEntrepreneurComponent } from './components/update-entrepreneur/update-entrepreneur.component';
import { DeleteEntrepreneurComponent } from './components/delete-entrepreneur/delete-entrepreneur.component';
import { UpdateProduitEntrepreneurComponent } from './components/update-produit-entrepreneur/update-produit-entrepreneur.component';
import { AllProduitEntrepreneurComponent } from './components/all-produit-entrepreneur/all-produit-entrepreneur.component';
import { DetailProduitEntrepreneurComponent } from './components/detail-produit-entrepreneur/detail-produit-entrepreneur.component';
import { AddProduitComponent } from './components/add-produit/add-produit.component';


@NgModule({
  declarations: [
    ProfilEntrepreneurComponent,
    UpdateEntrepreneurComponent,
    DeleteEntrepreneurComponent,
    UpdateProduitEntrepreneurComponent,
    AllProduitEntrepreneurComponent,
    DetailProduitEntrepreneurComponent,
    AddProduitComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    EntrepreneurRoutingModule
  ]
})
export class EntrepreneurModule { }
