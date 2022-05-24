import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client } from 'src/app/models/client.model';
import { AuthService } from 'src/app/services/api/auth.service';

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
    
  ) { }

  ngOnInit(): void {
  }

}
