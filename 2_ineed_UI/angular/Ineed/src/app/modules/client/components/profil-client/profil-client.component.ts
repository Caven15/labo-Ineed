import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client } from 'src/app/models/client.model';
import { entrepreneur } from 'src/app/models/entrepreneur.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { ClientService } from 'src/app/services/api/client.service';
import { EntrepreneurService } from 'src/app/services/api/entrepreneur.service';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.scss'],
  providers: [DatePipe]

})
export class ProfilClientComponent implements OnInit {

  public client : client = new client;
  public estEntrepreneur : boolean = true;
  public entrepreneur : entrepreneur

  constructor(
    private _route : Router, 
    private _authService : AuthService, 
    private _clientService : ClientService,
    private _entrepreneurService : EntrepreneurService,
    public datepipe: DatePipe
    
  ) { }

  ngOnInit(): void {
    if(!this._authService.isConnected()){
      this._route.navigate(['auth', 'login'])
      return;
    }
    this.chargerClient()
    this.chargerEntrepreneur()
  }

  chargerClient(): void{
    if (this._authService.isConnected()) {
      let id: number = parseInt(sessionStorage.getItem("id"))
      this._clientService.GetById(id).subscribe(client => {
        this.client = client
        // configuration dyu pipe pour avoir la date au format dd/MM/yyyy
        var dateEN = client.dateNaissance
        this.datepipe.transform(dateEN, 'dd-MM-yyyy')
      })
    }
    else{
      this._route.navigate(['login'])
    }
  }

  chargerEntrepreneur(): void {
    let id: number = parseInt(sessionStorage.getItem("id"))
    this._entrepreneurService.getByUtilisateurId(id).subscribe(entrepreneur => {
      if (entrepreneur == undefined) {
        this.estEntrepreneur = false
      }
    })
  }

  chargerRouteUpdateInfos(): void {
    this._route.navigate(['updateInfos'])
  }

  chargerRouteUpdateAdresse(): void {
    this._route.navigate(['updateAdresse'])
  }

  chargerRouteUpdatePassword(): void {
    this._route.navigate(['updatePassword'])
  }

  chargerRouteUpdate(): void {
    this._route.navigate(['deleteProfil'])
  }

  chargerRouteRegisterEntrepreneur(): void {
    this._route.navigate(['auth', 'registerEntrepreneur'])
  }
  
  chargerRouteCompteEntrepreneur(): void {
    this._route.navigate(['entrepreneur', 'profil'])
  }
}
