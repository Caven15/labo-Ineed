import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/other/register.service';
import { registerClientForm } from 'src/app/models/registerClientForm.model';

@Component({
  selector: 'app-register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['./register-step-two.component.scss']
})
export class RegisterStepTwoComponent implements OnInit {

  public RegisterStepTwo : FormGroup;
  public utilisateur : registerClientForm;
  public errorMessage : string = "";
  public etatEnvoi = false;

  constructor(
    private _route : Router, 
    private _registerService : RegisterService,
    private _formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.RegisterStepTwo = this._formBuilder.group({
      numeroRue : [null, [Validators.required]],
      rue : [null, [Validators.required]],
      ville : [null, [Validators.required]],
      codePostal : [null, [Validators.required]]
    })
  }

  // facilite l'utilisation du formulaire lors de l'appel
  get f() { return this.RegisterStepTwo.controls; }

  onSubmit(): void{

    if (this.RegisterStepTwo.invalid) {
      this.etatEnvoi = true;
      return;
    }
    console.log("register strep two !");
    this.errorMessage = "";
    this._registerService.loadDataStepTwo(
      this.RegisterStepTwo.value["numeroRue"],
      this.RegisterStepTwo.value["rue"],
      this.RegisterStepTwo.value["ville"],
      this.RegisterStepTwo.value["codePostal"]
    )
    this._route.navigate(["auth", "registerStepThree"]);
  }
  
}
