import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client } from 'src/app/models/client.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { ClientService } from 'src/app/services/api/client.service';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.scss'],
  providers: [DatePipe]

})
export class ProfilClientComponent implements OnInit {

  public client : client = new client;

  constructor(
    private _route : Router, 
    private _authService : AuthService, 
    private _clientService : ClientService,
    public datepipe: DatePipe
    
  ) { }

  ngOnInit(): void {
    this.chargerClient()
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
}
