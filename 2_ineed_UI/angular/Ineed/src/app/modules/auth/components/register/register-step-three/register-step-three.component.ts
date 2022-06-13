import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { registerClientForm } from 'src/app/models/auth/registerClientForm.model';
import { AuthService } from 'src/app/services/api/auth.service';
import { RegisterService } from 'src/app/services/other/register.service';

@Component({
  selector: 'app-register-step-three',
  templateUrl: './register-step-three.component.html',
  styleUrls: ['./register-step-three.component.scss']
})
export class RegisterStepThreeComponent implements OnInit {

  public RegisterStepThree : FormGroup;
  public utilisateur : registerClientForm;
  public errorMessage : string = "";
  public confirmPassword : boolean = false;

  constructor(
    private _route : Router, 
    private _registerService : RegisterService,
    private _formBuilder : FormBuilder,
    private _authService : AuthService
  ) { }

// facilite l'utilisation du formulaire lors de l'appel
get f() { return this.RegisterStepThree.controls; }


  ngOnInit(): void {
    this.RegisterStepThree = this._formBuilder.group({
      password : [null, [Validators.required, Validators.minLength(6), Validators.minLength(20)]],
      confirmPassword : [null, [Validators.required, Validators.minLength(6), Validators.minLength(20)]],
    })
  }

  onSubmit(): void{
    let password : string = this.RegisterStepThree.value["password"]
    let confirmPassword : string = this.RegisterStepThree.value["confirmPassword"]
    if (password !== confirmPassword) {
      this.confirmPassword = true;
      return;
    }
    else{
      this.utilisateur = new registerClientForm();
      this.utilisateur.nom = this._registerService.dataRegister.nom
      this.utilisateur.prenom = this._registerService.dataRegister.prenom
      this.utilisateur.dateNaissance = this._registerService.dataRegister.dateNaissance
      this.utilisateur.email = this._registerService.dataRegister.email
      this.utilisateur.numeroRue = this._registerService.dataRegister.numeroRue
      this.utilisateur.rue = this._registerService.dataRegister.rue
      this.utilisateur.ville = this._registerService.dataRegister.ville
      this.utilisateur.codePostal = this._registerService.dataRegister.codePostal
      this.utilisateur.password = confirmPassword

      this._authService.RegisterClient(this.utilisateur).subscribe(
        {
          next : (data) => {
            // chargement du module ensuite le component
            this._route.navigate(["auth", "login"]);
          }, 
          error : (error) =>{
            this.errorMessage = "l'enregistrement a échoué veuillez ressayer...";
            console.log(error);
          },
        }
      );
    }
  }
}
