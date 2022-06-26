import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
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

  public img : SafeUrl = 'assets/svg/person-video.svg';
  public imageTemp: File
  public entrepreneur: registerEntrepreneurForm
  public registerEntrepreneur : FormGroup

  constructor(
    private _route : Router,
    private _entrepreneurService: EntrepreneurService,
    private _authService : AuthService,
    private _formBuilder : FormBuilder,
    private _clientService : ClientService,
    private _tokenService : tokenService,
    private _sanitization : DomSanitizer
  ) { }

  ngOnInit(): void {
    this.refresh()
  }

  changeImage(event: any){
    // Récupérer le fichier
    this.imageTemp = event.target.files[0];
    // Créer un URL lisible par la balise img
    const objectUrl = URL.createObjectURL(this.imageTemp);
    // Update de l'attribut par la nouvelle URL
    this.img = this._sanitization.bypassSecurityTrustUrl(objectUrl); // bypassSecurityTrustUrl évite d'avoir un warning
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
      image : [null, [Validators.required]]
    })
  }

  onSubmit(): void{
    if (this.registerEntrepreneur.invalid) {
      return;
    }
    else{
      const formulaireEntrepreneur = new FormData();
      formulaireEntrepreneur.append('nomE', this.registerEntrepreneur.value["nom"])
      formulaireEntrepreneur.append('rueE', this.registerEntrepreneur.value["rue"])
      formulaireEntrepreneur.append('numeroRueE', this.registerEntrepreneur.value["numeroRue"])
      formulaireEntrepreneur.append('villeE', this.registerEntrepreneur.value["ville"])
      formulaireEntrepreneur.append('codePostalE', this.registerEntrepreneur.value["codePostal"])
      formulaireEntrepreneur.append('utilisateurId', this._tokenService.getIdFromToken())
      formulaireEntrepreneur.append('image', this.imageTemp)

      console.log(this.entrepreneur)
      this._authService.RegisterEntrepreneur(formulaireEntrepreneur).subscribe({
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
