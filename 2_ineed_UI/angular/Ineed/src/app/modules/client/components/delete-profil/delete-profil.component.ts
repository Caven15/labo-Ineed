import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth.service';
import { UtilisateurService } from 'src/app/services/api/utilisateur.service';
import { tokenService } from 'src/app/services/other/token-service.service';

@Component({
  selector: 'app-delete-profil',
  templateUrl: './delete-profil.component.html',
  styleUrls: ['./delete-profil.component.scss']
})
export class DeleteProfilComponent implements OnInit {

  constructor(
    private _route : Router,
    private _authService: AuthService,
    private _utilisateurService : UtilisateurService,
    private _tokenService : tokenService
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
    let id: number = parseInt(this._tokenService.getIdFromToken());
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
