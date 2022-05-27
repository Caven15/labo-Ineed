import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProduitEntrepreneurComponent } from './components/all-produit-entrepreneur/all-produit-entrepreneur.component';
import { DeleteEntrepreneurComponent } from './components/delete-entrepreneur/delete-entrepreneur.component';
import { ProfilEntrepreneurComponent } from './components/profil-entrepreneur/profil-entrepreneur.component';
import { UpdateEntrepreneurComponent } from './components/update-entrepreneur/update-entrepreneur.component';

const routes: Routes = [
  {path:'profil', component: ProfilEntrepreneurComponent},
  {path:'update', component: UpdateEntrepreneurComponent},
  {path:'delete', component: DeleteEntrepreneurComponent},
  {path:'allProduits', component: AllProduitEntrepreneurComponent},
  {path:'updateProduit', component: UpdateEntrepreneurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepreneurRoutingModule { }
