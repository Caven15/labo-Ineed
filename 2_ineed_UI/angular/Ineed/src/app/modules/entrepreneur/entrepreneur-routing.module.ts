import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveInfoEntrepreneurService } from 'src/app/services/resolver/resolve-info-entrepreneur.service';
import { ResolveInfoProduitService } from 'src/app/services/resolver/resolve-info-produit.service';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { AllProduitEntrepreneurComponent } from './components/all-produit-entrepreneur/all-produit-entrepreneur.component';
import { DeleteEntrepreneurComponent } from './components/delete-entrepreneur/delete-entrepreneur.component';
import { DeleteProduitComponent } from './components/delete-produit/delete-produit.component';
import { DetailProduitEntrepreneurComponent } from './components/detail-produit-entrepreneur/detail-produit-entrepreneur.component';
import { EntrepreneurItemComponent } from './components/entrepreneur-item/entrepreneur-item.component';
import { ProfilEntrepreneurComponent } from './components/profil-entrepreneur/profil-entrepreneur.component';
import { UpdateEntrepreneurComponent } from './components/update-entrepreneur/update-entrepreneur.component';
import { UpdateProduitEntrepreneurComponent } from './components/update-produit-entrepreneur/update-produit-entrepreneur.component';

const routes: Routes = [
  {path:'profil', resolve:{datas: ResolveInfoEntrepreneurService}, component: ProfilEntrepreneurComponent},
  {path:'update', resolve:{datas: ResolveInfoEntrepreneurService}, component: UpdateEntrepreneurComponent},
  {path:'delete', component: DeleteEntrepreneurComponent},
  {path:'delete/:id', component: DeleteProduitComponent},
  {path:'allProduits', component: AllProduitEntrepreneurComponent},
  {path:'detail/:id', component: DetailProduitEntrepreneurComponent},
  {path:'updateProduit/:id', resolve:{datas: ResolveInfoProduitService}, component: UpdateProduitEntrepreneurComponent},
  {path:'add/:entrepreneurId', component: AddProduitComponent},
  {path: 'entrepreneurItem/:id', component: EntrepreneurItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepreneurRoutingModule { }
