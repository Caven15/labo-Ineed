import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { AllProduitEntrepreneurComponent } from './components/all-produit-entrepreneur/all-produit-entrepreneur.component';
import { DeleteEntrepreneurComponent } from './components/delete-entrepreneur/delete-entrepreneur.component';
import { DeleteProduitComponent } from './components/delete-produit/delete-produit.component';
import { DetailProduitEntrepreneurComponent } from './components/detail-produit-entrepreneur/detail-produit-entrepreneur.component';
import { ProfilEntrepreneurComponent } from './components/profil-entrepreneur/profil-entrepreneur.component';
import { UpdateEntrepreneurComponent } from './components/update-entrepreneur/update-entrepreneur.component';
import { UpdateProduitEntrepreneurComponent } from './components/update-produit-entrepreneur/update-produit-entrepreneur.component';

const routes: Routes = [
  {path:'profil', component: ProfilEntrepreneurComponent},
  {path:'update', component: UpdateEntrepreneurComponent},
  {path:'delete', component: DeleteEntrepreneurComponent},
  {path:'delete/:id', component: DeleteProduitComponent},
  {path:'allProduits', component: AllProduitEntrepreneurComponent},
  {path:'detail/:id', component: DetailProduitEntrepreneurComponent},
  {path:'updateProduit/:id', component: UpdateProduitEntrepreneurComponent},
  {path:'add/:entrepreneurId', component: AddProduitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepreneurRoutingModule { }
