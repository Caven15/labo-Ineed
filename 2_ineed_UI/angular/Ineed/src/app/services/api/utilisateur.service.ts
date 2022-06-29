import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeadersReturnsService } from '../other/headers-json-returns.service';

@Injectable({
providedIn: 'root'
})
export class UtilisateurService {

constructor(private _client: HttpClient) { }

// suprimmer un utilisateur
    delete(id: number){
        return this._client.delete(`${environment.apiUrl}/utilisateur/delete/${id}`);
    }

// update Password
    updatePassword(id: number, oldPassword: string, newPassword: string, confirmNewPassword: string){
        return this._client.patch(`${environment.apiUrl}/utilisateur/updatePassword/${id}`,
            {
                oldPassword: oldPassword,
                newPassword: newPassword,
                confirmNewPassword: confirmNewPassword
            },
        )}
    }
