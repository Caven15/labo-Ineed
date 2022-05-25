import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { client } from 'src/app/models/client.model';
import { AuthService } from 'src/app/services/api/auth.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  public client : client
  public updateFormPassword : FormGroup

  constructor(
    private _route : Router,
    private _authService : AuthService,
    private _formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {
    if(!this._authService.isConnected()){
      this._route.navigate(['auth', 'login'])
      return;
    }
    this.updateFormPassword = this._formBuilder.group({
      password : [this.client.password, [Validators.required]]
    })
  }

  onSubmit(): void {

  }

  chargerRouteProfil(): void {
    this._route.navigate(['profil'])
  }
}
