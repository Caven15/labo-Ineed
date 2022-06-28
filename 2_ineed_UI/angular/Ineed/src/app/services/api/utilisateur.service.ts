import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeadersReturnsService } from '../other/headers-json-returns.service';

@Injectable({
providedIn: 'root'
})
export class UtilisateurService {

constructor(
    private _client: HttpClient,
    private _headers: HeadersReturnsService
    ) { }

// suprimmer un utilisateur
    delete(id: number){
        let headers = this._headers.headersReturn()
        return this._client.delete(`${environment.apiUrl}/utilisateur/delete/${id}`,{'headers' : headers});
    }

// update Password
    updatePassword(id: number, oldPassword: string, newPassword: string, confirmNewPassword: string){
        let headers = this._headers.headersReturn() 
        return this._client.patch(`${environment.apiUrl}/utilisateur/updatePassword/${id}`,
            {
                oldPassword: oldPassword,
                newPassword: newPassword,
                confirmNewPassword: confirmNewPassword
            },
            {'headers' : headers})}
    }
