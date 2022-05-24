import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilClientComponent } from './components/profil-client/profil-client.component';

const routes: Routes = [
  {path:'profil', component: ProfilClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
