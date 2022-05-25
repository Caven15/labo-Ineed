import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ProfilClientComponent } from './components/profil-client/profil-client.component';
import { UpdateAdresseComponent } from './components/update-adresse/update-adresse.component';
import { UpdateInfosComponent } from './components/update-infos/update-infos.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { DeleteProfilComponent } from './components/delete-profil/delete-profil.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfilClientComponent,
    UpdateAdresseComponent,
    UpdateInfosComponent,
    UpdatePasswordComponent,
    DeleteProfilComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
