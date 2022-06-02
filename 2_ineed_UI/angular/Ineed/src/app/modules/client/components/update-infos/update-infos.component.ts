import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from 'src/app/models/client.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { ClientService } from 'src/app/services/api/client.service';

@Component({
  selector: 'app-update-infos',
  templateUrl: './update-infos.component.html',
  styleUrls: ['./update-infos.component.scss']
})
export class UpdateInfosComponent implements OnInit {

  public client : client
  public updateFormInfos : FormGroup

  constructor(
    private _route : Router,
    private _clientService: ClientService,
    private _authService : AuthService,
    private _formBuilder : FormBuilder,
    private _activatedRoute : ActivatedRoute
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
    let client : client = this._activatedRoute.snapshot.data['datas']
    this.client = client
    if (!this.client || this.client == null){
      this._route.navigate(['client'])
    }
    else{
      this.updateFormInfos = this._formBuilder.group({
        nom : [this.client.nom, [Validators.required]],
        prenom : [this.client.prenom, [Validators.required]],
        dateNaissance : [this.client.dateNaissance, [Validators.required]],
        email : [this.client.email, [Validators.email,Validators.required]]
      })
    }
  }

    onSubmit(){
      // si le formulaire d'update n'est pas valable
      console.log("je lance l'update")
      if(this.updateFormInfos.invalid){
        return;
      }
      // sinon tout est ok
      else{
        let nom: string = this.updateFormInfos.value['nom']
        let prenom: string = this.updateFormInfos.value['prenom']
        let dateNAissance: Date = this.updateFormInfos.value['dateNAissance']
        let email: string = this.updateFormInfos.value['email']
        this._clientService.updateDataClient(this.client.id, nom, prenom, dateNAissance, email).subscribe({
          error: (errors) => {
            console.log(errors)
          },
          complete: () => {
            console.log("l'adresse a bien été modifier")
            this._route.navigate(['profil'])
          }
        })
      }
    }

    chargerRouteProfil(): void {
      this._route.navigate(['profil'])
    }
}
