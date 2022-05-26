import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { updatePassword } from 'src/app/models/updatePassword.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { UtilisateurService } from 'src/app/services/api/utilisateur.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  public updateFormPassword : FormGroup
  public client : updatePassword

  constructor(
    private _route : Router,
    private _authService : AuthService,
    private _utilisateurService : UtilisateurService,
    private _formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.refresh()
    this.updateFormPassword = this._formBuilder.group({
      oldPassword : [null, [Validators.required, Validators.minLength(2), Validators.minLength(20)]],
      newPassword : [null, [Validators.required, Validators.minLength(2), Validators.minLength(20)]],
      comfirmNewPassword : [null, [Validators.required, Validators.minLength(2), Validators.minLength(20)]]
    })
  }

  refresh(): void {
    if(!this._authService.isConnected()){
      this._route.navigate(['auth', 'login'])
      return;
    }
  }

  onSubmit(): void {
    let oldPassword: string = this.updateFormPassword.value['oldPassword']
    let newPassword: string = this.updateFormPassword.value['newPassword']
    let comfirmNewPassword: string = this.updateFormPassword.value['comfirmNewPassword']
    let id : number = parseInt(sessionStorage.getItem("id"))
    this._utilisateurService.updatePassword(id, oldPassword, newPassword, comfirmNewPassword).subscribe({
      error: (errors) => {
        console.log(errors)
      },
      complete: () => {
        console.log("mot de passe mis a jour avec succès")
        this._route.navigate(['profil'])
      }
    })
  }

  chargerRouteProfil(): void {
    this._route.navigate(['profil'])
  }
}
