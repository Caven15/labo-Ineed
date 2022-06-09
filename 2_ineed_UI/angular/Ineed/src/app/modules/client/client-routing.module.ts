import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetByIdClientResolver } from 'src/app/services/resolver/client/get-by-id-client.resolver'; 
import { DeleteProfilComponent } from './components/delete-profil/delete-profil.component';
import { ProfilClientComponent } from './components/profil-client/profil-client.component';
import { UpdateAdresseComponent } from './components/update-adresse/update-adresse.component';
import { UpdateInfosComponent } from './components/update-infos/update-infos.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';

const routes: Routes = [
  {path:'profil', resolve:{datas: GetByIdClientResolver}, component: ProfilClientComponent},
  {path:'updateInfos', resolve:{datas: GetByIdClientResolver}, component: UpdateInfosComponent},
  {path:'updateAdresse', resolve:{datas: GetByIdClientResolver}, component: UpdateAdresseComponent},
  {path:'updatePassword', component: UpdatePasswordComponent},
  {path:'deleteProfil', component: DeleteProfilComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
