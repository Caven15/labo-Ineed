import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from 'src/app/models/client/client.model';
import { entrepreneur } from 'src/app/models/entrepreneur/entrepreneur.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { ClientService } from 'src/app/services/api/client.service';
import { EntrepreneurService } from 'src/app/services/api/entrepreneur.service';
import { tokenService } from 'src/app/services/other/token-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.scss'],
  providers: [DatePipe]

})
export class ProfilClientComponent implements OnInit {

  public apiUrl = environment.apiUrl + "/" 
  public client : client = new client;
  public estEntrepreneur : boolean = true;
  public entrepreneur : entrepreneur

  constructor(
    private _route : Router, 
    private _authService : AuthService, 
    private _clientService : ClientService,
    private _entrepreneurService : EntrepreneurService,
    private _activatedRoute : ActivatedRoute,
    public datepipe: DatePipe,
    private _tokenService : tokenService
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
      let utilisateur : client = this._activatedRoute.snapshot.data['datas']
      this.client = utilisateur
        // configuration du pipe pour avoir la date au format dd/MM/yyyy
      var dateEN = this.client.dateNaissance
      this.datepipe.transform(dateEN, 'dd-MM-yyyy')
    }
    else{
      this._route.navigate(['login'])
    }
  }

  chargerEntrepreneur(): void {
    let id: number = parseInt(this._tokenService.getIdFromToken())
    this._entrepreneurService.getByUtilisateurId(id).subscribe(entrepreneur => {
      if (entrepreneur == undefined) {
        this.estEntrepreneur = false
      }
    })
  }

  chargerRouteUpdateInfos(): void {
    this._route.navigate(['updateInfos'])
  }

  chargerRouteUpdateImageProfil(): void {
    this._route.navigate(['updateImageProfil'])
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
