import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categorie } from 'src/app/models/categorie/categorie.model';
import { environment } from 'src/environments/environment';
import { HeadersReturnsService } from '../other/headers-returns.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(
    private _client: HttpClient,
    private _headers: HeadersReturnsService
  ) { }

  // récupère toutes les catégories
  getAll(): Observable<categorie[]>{
    var categories = this._client.get<categorie[]>(`${environment.apiUrl}/categorie/getAll`)
    return categories
  }

  // récupère une catégorie par son id
  GetById(id : number) : Observable<categorie>{
    var categorie = this._client.get<categorie>(`${environment.apiUrl}/categorie/getById/${id}`);
    return categorie;
  }
}
