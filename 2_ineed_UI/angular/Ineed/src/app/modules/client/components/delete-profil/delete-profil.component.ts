import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth.service';
import { UtilisateurService } from 'src/app/services/api/utilisateur.service';

@Component({
  selector: 'app-delete-profil',
  templateUrl: './delete-profil.component.html',
  styleUrls: ['./delete-profil.component.scss']
})
export class DeleteProfilComponent implements OnInit {

  constructor(
    private _route : Router,
    private _authService: AuthService,
    private _utilisateurService : UtilisateurService
  ) { }

  ngOnInit(): void {
    if (!this._authService.isConnected()) {
      this._route.navigate(["auth", "login"])
    }
  }

  retourArriere(): void {
    this._route.navigate(['profil'])
  }

  deleteUser(): void {
    let id: number = parseInt(sessionStorage.getItem("id"));
    this._utilisateurService.delete(id).subscribe({
      error: (errors) =>{
        console.log(errors)
      },
      complete: () => {
        this._authService.logout()
        this._route.navigate(['auth', 'login'])
      }
    });
  }

}
