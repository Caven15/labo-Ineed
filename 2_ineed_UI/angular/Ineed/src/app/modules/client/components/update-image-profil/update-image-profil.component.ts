import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from 'src/app/models/client/client.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { environment } from 'src/environments/environment';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { ClientService } from 'src/app/services/api/client.service';

@Component({
  selector: 'app-update-image-profil',
  templateUrl: './update-image-profil.component.html',
  styleUrls: ['./update-image-profil.component.scss']
})
export class UpdateImageProfilComponent implements OnInit {

  public img : SafeUrl = 'assets/svg/person-fill.svg';
  public client : client = new client()
  public apiUrl = environment.apiUrl + "/" 
  public ajoutImage : FormGroup
  public imageTemp: File 
  public Angular = "http://localhost:4200/"

  constructor(
    private _authService : AuthService,
    private _route : Router,
    private _activatedRoute : ActivatedRoute,
    private _clientService : ClientService,
    private _formBuilder : FormBuilder,
    private _sanitization : DomSanitizer
  ) { }

  ngOnInit(): void {
    this.ajoutImage = this._formBuilder.group({
      image : [null, [Validators.required]]
    })
    this.chargerClient()
  }

  changeImage(event: any){
    // Récupérer le fichier
    this.imageTemp = event.target.files[0];
    // Créer un URL lisible par la balise img
    const objectUrl = URL.createObjectURL(this.imageTemp);
    // Update de l'attribut par la nouvelle URL
    this.img = this._sanitization.bypassSecurityTrustUrl(objectUrl); // bypassSecurityTrustUrl évite d'avoir un warning
  }
  
  resetImage(){
    this.img = 'assets/svg/person-fill.svg';
  }

  chargerClient(): void{
    if (this._authService.isConnected()) {
      let utilisateur : client = this._activatedRoute.snapshot.data['datas']
      this.client = utilisateur
    }
    else{
      this._route.navigate(['login'])
    }
  }

  chargerRouteProfil(): void {
    this._route.navigate(['profil'])
  }

  onSubmit(): void {
    const formulaireImage = new FormData();
    formulaireImage.append('image', this.imageTemp);
    this._clientService.updateImageClient(this.client.id, formulaireImage).subscribe({
      error : (error) => {
        console.log(error)
      },
      complete: () => {
        console.log("image mis a jour avec succès !")
        this._route.navigate(['profil'])
      }
    })
  }
}
