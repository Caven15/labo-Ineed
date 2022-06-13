import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from 'src/app/models/client/client.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { ClientService } from 'src/app/services/api/client.service';

@Component({
  selector: 'app-update-adresse',
  templateUrl: './update-adresse.component.html',
  styleUrls: ['./update-adresse.component.scss']
})
export class UpdateAdresseComponent implements OnInit {

  public client: client
  public updateFormAdresse : FormGroup

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
    // je vérifie si l'client existe
    if (!this.client || this.client == null){
      this._route.navigate(['client'])
    }
    // je vérifie si l'user a modifier est le meme que celui qui procède a la modification
    // alor tout est ok je peux créer mon formulaire d'update
    this.updateFormAdresse = this._formBuilder.group({
      rue : [null, [Validators.required]],
      numeroRue : [null, [Validators.required]],
      ville : [null, [Validators.required]],
      codePostal : [null, [Validators.required]]
    })
    }

    onSubmit(){
      // si le formulaire d'update n'est pas valable
      console.log("je lance l'update")
      if(this.updateFormAdresse.invalid){
        return;
      }
      // sinon tout est ok
      else{
        let rue: string = this.updateFormAdresse.value['rue']
        let numeroRue: number = this.updateFormAdresse.value['numeroRue']
        let ville: string = this.updateFormAdresse.value['ville']
        let codePostal: number = this.updateFormAdresse.value['codePostal']
        this._clientService.updateDataLivraison(this.client.id, rue, numeroRue, ville, codePostal).subscribe({
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

