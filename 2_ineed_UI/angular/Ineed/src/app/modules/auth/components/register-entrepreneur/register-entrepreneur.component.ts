import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { registerEntrepreneurForm } from 'src/app/models//auth/registerEntrepreneurForm.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { ClientService } from 'src/app/services/api/client.service';
import { EntrepreneurService } from 'src/app/services/api/entrepreneur.service';
import { tokenService } from 'src/app/services/other/token-service.service';

@Component({
  selector: 'app-register-entrepreneur',
  templateUrl: './register-entrepreneur.component.html',
  styleUrls: ['./register-entrepreneur.component.scss']
})
export class RegisterEntrepreneurComponent implements OnInit {

  public entrepreneur: registerEntrepreneurForm
  public registerEntrepreneur : FormGroup

  constructor(
    private _route : Router,
    private _entrepreneurService: EntrepreneurService,
    private _authService : AuthService,
    private _formBuilder : FormBuilder,
    private _clientService : ClientService,
    private _tokenService : tokenService
  ) { }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void{
    // si le client n'est pas connecté on redirige ver le login
    if(!this._authService.isConnected()){
      this._route.navigate(['auth', 'login'])
      return;
    }
    this.registerEntrepreneur = this._formBuilder.group({
      nom : [null, [Validators.required]],
      rue : [null, [Validators.required]],
      numeroRue : [null,[Validators.required]],
      ville : [null, [Validators.required]],
      codePostal : [null, [Validators.required]],
    })
  }

  onSubmit(): void{
    if (this.registerEntrepreneur.invalid) {
      return;
    }
    else{
      this.entrepreneur = new registerEntrepreneurForm();
      this.entrepreneur.nomE = this.registerEntrepreneur.value["nom"]
      this.entrepreneur.rueE = this.registerEntrepreneur.value["rue"]
      this.entrepreneur.numeroRueE = this.registerEntrepreneur.value["numeroRue"]
      this.entrepreneur.villeE = this.registerEntrepreneur.value["ville"]
      this.entrepreneur.codePostalE = this.registerEntrepreneur.value["codePostal"]
      this.entrepreneur.utilisateurId = parseInt(this._tokenService.getIdFromToken())
      console.log(this.entrepreneur)
      this._authService.RegisterEntrepreneur(this.entrepreneur).subscribe({
        next : (data) => {
          
          this._route.navigate(["entrepreneur", "profil"])
          let id : number = parseInt(this._tokenService.getIdFromToken())
          this._clientService.updateRoleClient(id, 2).subscribe({
            next : (data) => {
              this._authService.logout()
              this._route.navigate(['auth', 'login'])
            }
          })
        },
        error : (error) => {
          console.log(error)
        }
      })
    }
  }

  retourArriere(): void {
    this._route.navigate(['client', 'profil'])
  }
}
