import { Injectable } from '@angular/core';
import { registerClientForm } from 'src/app/models/registerClientForm.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public dataRegister : registerClientForm;

  constructor() {
    this.dataRegister = new registerClientForm();
  }
  
  loadDataStepOne(nom: string, prenom: string, dateNaissance: Date, email: string): void{
    this.dataRegister.nom = nom
    this.dataRegister.prenom = prenom
    this.dataRegister.dateNaissance = dateNaissance
    this.dataRegister.email = email
    console.log(this.dataRegister)
  }

  loadDataStepTwo(numeroRue: number, rue: string, ville: string, codePostal: number): void{
    this.dataRegister.numeroRue = numeroRue
    this.dataRegister.rue = rue
    this.dataRegister.ville = ville
    this.dataRegister.codePostal = codePostal
    console.log(this.dataRegister)
  }
  
  loadDataStepThree(password: string){
    this.dataRegister.password = password
  }
}
