import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { client } from 'src/app/models/client.model';
import { loginForm } from 'src/app/models/loginForm.model';
import { AuthService } from 'src/app/services/api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  public utilisateur : loginForm;

  constructor(
    private _route : Router, 
    private _authService : AuthService, 
    private _formBuilder : FormBuilder
    ) { }

  ngOnInit(): void {

    this.loginForm = this._formBuilder.group({
      email : [null, [Validators.email,Validators.required]],
      password : [null, [Validators.required, Validators.minLength(2), Validators.minLength(20)]]
    })
  }

  login(): void {
    console.log("connection en cours...");
    this.utilisateur = new loginForm();
    this.utilisateur.email = this.loginForm.value["email"];
    this.utilisateur.password = this.loginForm.value["password"];
    let currentUser : client;
    this._authService.Login(this.loginForm.value).subscribe(
      {
        next: (client) => {
          currentUser = client;
          if (currentUser != null){
            this._route.navigate(["home"]);
          }
        },
        error: (error) => {
          console.log(error)
        }
      }
    );
  }
}
