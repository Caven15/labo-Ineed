import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth.service';
import { EntrepreneurService } from 'src/app/services/api/entrepreneur.service';
import { tokenService } from 'src/app/services/other/token-service.service';

@Component({
  selector: 'app-delete-entrepreneur',
  templateUrl: './delete-entrepreneur.component.html',
  styleUrls: ['./delete-entrepreneur.component.scss']
})
export class DeleteEntrepreneurComponent implements OnInit {

  constructor(
    private _route : Router,
    private _authService : AuthService,
    private _entrepreneurService : EntrepreneurService,
    private _tokenService : tokenService
  ) { }

  ngOnInit(): void {
  }

  deleteEntrepreneur():void {
    // supprimer tout les produits liés a l'entrepreneur
      // a mettre en place !
    // supprimer l'entrepreneur
      let id: number = parseInt(this._tokenService.getIdFromToken());
      this._entrepreneurService.delete(id).subscribe({
        error: (errors) =>{
          console.log(errors)
        },
        complete: () => {
          this._route.navigate(['client', 'profil'])
        }
      });
    // redirigé vers le profil client
  }

  retourArriere(): void{
    this._route.navigate(['entrepreneur', 'profil'])
  }

}
