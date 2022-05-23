import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { registerClientForm } from 'src/app/models/registerClientForm.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  public registerClientForm : FormGroup;
  public utilisateur : registerClientForm;
  public errorMessage : string = "";
  public confirmPassword : boolean = false;

  constructor(
    private _route : Router, 
    private _authService : AuthService, 
    private _formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerClientForm = this._formBuilder.group({
      nom : [null, [Validators.required, Validators.minLength(1), Validators.maxLength(80)]],
      prenom : [null, [Validators.required, Validators.minLength(1), Validators.maxLength(80)]],
      dateNaissance : [null,[Validators.required]],
      email : [null, [Validators.email,Validators.required]],
      numeroRue : [null, [Validators.required]],
      rue : [null, [Validators.required]],
      ville : [null, [Validators.required]],
      codePostal : [null, [Validators.required]],
      password : [null, [Validators.required, Validators.minLength(6), Validators.minLength(20)]],
      confirmPassword : [null, [Validators.required, Validators.minLength(6), Validators.minLength(20)]],
    })
  }

  register(): void{
    console.log("register");
    this.errorMessage = "";

    let password = this.registerClientForm.value["password"];
    let confirmPassword = this.registerClientForm.value["confirmPassword"];
    password !== confirmPassword ? confirmPassword = false : confirmPassword = true

    this.utilisateur = new registerClientForm();
    this.utilisateur.nom = this.registerClientForm.value["nom"];
    this.utilisateur.prenom = this.registerClientForm.value["prenom"];
    this.utilisateur.dateNaissance = new Date(this.registerClientForm.value["dateNaissance"]);
    this.utilisateur.email = this.registerClientForm.value["email"];
    this.utilisateur.numeroRue = this.registerClientForm.value["numeroRue"];
    this.utilisateur.rue = this.registerClientForm.value["rue"];
    this.utilisateur.ville = this.registerClientForm.value["ville"];
    this.utilisateur.codePostal = this.registerClientForm.value["codePostal"];
    this.utilisateur.password = this.registerClientForm.value["password"];

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
