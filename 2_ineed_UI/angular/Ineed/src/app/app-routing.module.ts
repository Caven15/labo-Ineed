import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './main/components/pages/accueil/accueil.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home', component: AccueilComponent},
  { path: 'auth', loadChildren: ()=>import('./modules/auth/auth.module').then(m => m.AuthModule)},
  { path: 'client', loadChildren: ()=>import('./modules/client/client.module').then(m=>m.ClientModule)},
  { path: 'entrepreneur', loadChildren: ()=>import('./modules/entrepreneur/entrepreneur.module').then(m=>m.EntrepreneurModule)},
  { path: 'produit', loadChildren: ()=>import('./modules/produit/produit.module').then(m=>m.ProduitModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
