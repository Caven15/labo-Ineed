import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { registerClientForm } from 'src/app/models/registerClientForm.model';
import { RegisterService } from 'src/app/services/other/register.service';

@Component({
  selector: 'app-register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.scss']
})
export class RegisterStepOneComponent implements OnInit {

  public RegisterStepOne : FormGroup;
  public utilisateur : registerClientForm;
  public errorMessage : string = "";
  public etatEnvoi = false;
  
  constructor(
    private _route : Router,
    private _registerService : RegisterService,
    private _formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.RegisterStepOne = this._formBuilder.group({
      nom : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      prenom : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      dateNaissance : [null,[Validators.required]],
      email : [null, [Validators.email,Validators.required]]
    })
  }
  // facilite l'utilisation du formulaire lors de l'appel
  get f() { return this.RegisterStepOne.controls; }

  onSubmit(): void{
    

    if (this.RegisterStepOne.invalid) {
      this.etatEnvoi = true;
      return;
    }
    console.log("register step one !");
    this.errorMessage = " ";

    this._registerService.loadDataStepOne(
      this.RegisterStepOne.value["nom"],
      this.RegisterStepOne.value["prenom"],
      this.RegisterStepOne.value["dateNaissance"],
      this.RegisterStepOne.value["email"]
    )
    this._route.navigate(["auth", "registerStepTwo"]);
  }
}
