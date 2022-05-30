import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth.service';
import { ProduitService } from 'src/app/services/api/produit.service';

@Component({
  selector: 'app-delete-produit',
  templateUrl: './delete-produit.component.html',
  styleUrls: ['./delete-produit.component.scss']
})
export class DeleteProduitComponent implements OnInit {

  constructor(
    private _route : Router,
    private _authService : AuthService,
    private _produitService : ProduitService,
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  deleteProduit(): void {
    let id: number = parseInt(sessionStorage.getItem("id"));
      this._produitService.delete(id).subscribe({
        error: (errors) =>{
          console.log(errors)
        },
        complete: () => {
          this._route.navigate(['allProduits'])
        }
      });
  }

  retourArriere(): void {
    let id : number = this._activatedRoute.snapshot.params['id']
    this._route.navigate(['detail', id])
  }
}
