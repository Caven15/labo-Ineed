import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { entrepreneur } from 'src/app/models/entrepreneur/entrepreneur.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { EntrepreneurService } from 'src/app/services/api/entrepreneur.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-image-entrepreneur',
  templateUrl: './update-image-entrepreneur.component.html',
  styleUrls: ['./update-image-entrepreneur.component.scss']
})
export class UpdateImageEntrepreneurComponent implements OnInit {

  public img : SafeUrl = 'assets/svg/building.svg';
  public entrepreneur : entrepreneur = new entrepreneur()
  public apiUrl = environment.apiUrl + "/" 
  public ajoutImage : FormGroup
  public imageTemp: File 

  constructor(
    private _authService : AuthService,
    private _route : Router,
    private _activatedRoute : ActivatedRoute,
    private _formBuilder : FormBuilder,
    private _sanitization : DomSanitizer,
    private _entrepreneurService : EntrepreneurService
  ) { }

  ngOnInit(): void {
    this.ajoutImage = this._formBuilder.group({
      image : [null, [Validators.required]]
    })
    this.chargerEntrepreneur()

    
  }

  resetImage(){
    this.img = 'assets/svg/building.svg';
  }

  changeImage(event: any){
    // Récupérer le fichier
    this.imageTemp = event.target.files[0];
    // Créer un URL lisible par la balise img
    const objectUrl = URL.createObjectURL(this.imageTemp);
    // Update de l'attribut par la nouvelle URL
    this.img = this._sanitization.bypassSecurityTrustUrl(objectUrl); // bypassSecurityTrustUrl évite d'avoir un warning
  }

  chargerEntrepreneur(): void{
    if (this._authService.isConnected()) {
      let entrepreneur : entrepreneur = this._activatedRoute.snapshot.data['datas']
      this.entrepreneur = entrepreneur
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
    this._entrepreneurService.updateImageEntrepreneur(this.entrepreneur.id, formulaireImage).subscribe({
      error : (error) => {
        console.log(error)
      },
      complete: () => {
        console.log("image mis a jour avec succès !")
        this._route.navigate(['entrepreneur','profil'])
      }
    })
  }
}
