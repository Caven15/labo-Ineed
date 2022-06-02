import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { entrepreneur } from 'src/app/models/entrepreneur.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { EntrepreneurService } from 'src/app/services/api/entrepreneur.service';

@Component({
  selector: 'app-update-entrepreneur',
  templateUrl: './update-entrepreneur.component.html',
  styleUrls: ['./update-entrepreneur.component.scss']
})
export class UpdateEntrepreneurComponent implements OnInit {

  public entrepreneur : entrepreneur
  public updateFormAdresseE : FormGroup


  constructor(
    private _route : Router,
    private _authService : AuthService,
    private _formBuilder : FormBuilder,
    private _entrepreneurService : EntrepreneurService,
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    // vérifier si l'i du session correspond a l'utilisateurId de l'entrepreneur
    this.refresh()
    this.chargerEntrepreneur()
    this.updateFormAdresseE = this._formBuilder.group({
      nomE : [null, [Validators.required]],
      rueE : [null, [Validators.required]],
      numeroRueE : [null, [Validators.required]],
      villeE : [null, [Validators.required]],
      codePostalE : [null, [Validators.required]]
    })
  }

  refresh(): void {
    if(!this._authService.isConnected()){
      this._route.navigate(['auth', 'login'])
      return;
    }
  }

  chargerEntrepreneur(): void {
    let entrepreneur : entrepreneur = this._activatedRoute.snapshot.data['datas']
    this.entrepreneur = entrepreneur
  }

  onSubmit(): void {
    let id : number = parseInt(sessionStorage.getItem("id"))
    this.entrepreneur = new entrepreneur()
    this.entrepreneur.nomE = this.updateFormAdresseE.value['nomE']
    this.entrepreneur.rueE = this.updateFormAdresseE.value['rueE']
    this.entrepreneur.numeroRueE = this.updateFormAdresseE.value['numeroRueE']
    this.entrepreneur.villeE = this.updateFormAdresseE.value['villeE']
    this.entrepreneur.codePostalE = this.updateFormAdresseE.value['codePostalE']
    this.entrepreneur.utilisateurId = id
    
    console.log(this.entrepreneur)
    this._entrepreneurService.update(id, this.entrepreneur).subscribe(
      {
        next : () => {
          this._route.navigate(['entrepreneur', 'profil'])
        },
        error : (error) => {
          console.log(error)
        }
      }
    )
  }

  chargerRouteProfil(): void {
    this._route.navigate(['entrepreneur', 'profil'])
  }
}
