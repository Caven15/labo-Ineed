import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetByIdProduitResolver } from 'src/app/services/resolver/produit/get-by-id-produit.resolver';
import { AllByCategorieComponent } from './components/all-by-categorie/all-by-categorie.component';
import { AllByEntrepreneurComponent } from './components/all-by-entrepreneur/all-by-entrepreneur.component';
import { DetailProduitComponent } from './components/detail-produit/detail-produit.component';
import { ProduitItemComponent } from './components/produit-item/produit-item.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';

const routes: Routes = [
  {path:'allByCategorie/:id', component: AllByCategorieComponent},
  {path:'allByEntrepreneur/:id', component: AllByEntrepreneurComponent},
  {path:'produiItem/:id', component: ProduitItemComponent},
  {path:'resultSearch/:value', component: ResultSearchComponent},
  {path:'detailProduit/:id',resolve:{datas: GetByIdProduitResolver}, component: DetailProduitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
