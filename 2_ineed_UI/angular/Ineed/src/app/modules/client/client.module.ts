import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ProfilClientComponent } from './components/profil-client/profil-client.component';


@NgModule({
  declarations: [
    ProfilClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
