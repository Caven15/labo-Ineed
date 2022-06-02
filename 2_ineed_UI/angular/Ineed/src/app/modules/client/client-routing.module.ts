import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveInfoUtilisateurService } from 'src/app/services/resolver/resolve-info-utilisateur.service';
import { DeleteProfilComponent } from './components/delete-profil/delete-profil.component';
import { ProfilClientComponent } from './components/profil-client/profil-client.component';
import { UpdateAdresseComponent } from './components/update-adresse/update-adresse.component';
import { UpdateInfosComponent } from './components/update-infos/update-infos.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';

const routes: Routes = [
  {path:'profil', resolve:{datas: ResolveInfoUtilisateurService}, component: ProfilClientComponent},
  {path:'updateInfos', resolve:{datas: ResolveInfoUtilisateurService}, component: UpdateInfosComponent},
  {path:'updateAdresse', resolve:{datas: ResolveInfoUtilisateurService}, component: UpdateAdresseComponent},
  {path:'updatePassword', component: UpdatePasswordComponent},
  {path:'deleteProfil', component: DeleteProfilComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
