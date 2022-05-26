import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
providedIn: 'root'
})
export class UtilisateurService {

constructor(private _client: HttpClient) { }

// suprimmer un utilisateur
delete(id: number)
{
let token : string = sessionStorage.getItem("currentUser")
for (let i = 0; i < token.length; i++) {
    token = token.replace('"', '')
}
token = "Bearer " + token

const headers = new HttpHeaders({
    'content-type': 'application/json',
    
    'Authorization': token
}) 
return this._client.delete(`${environment.apiUrl}/utilisateur/delete/${id}`,{'headers' : headers});
}

// update Password
updatePassword(id: number, oldPassword: string, newPassword: string, confirmNewPassword: string){
let token : string = sessionStorage.getItem("currentUser")
    for (let i = 0; i < token.length; i++) {
        token = token.replace('"', '')
    }
    token = "Bearer " + token

    const headers = new HttpHeaders({
        'content-type': 'application/json',
        
        'Authorization': token
    }) 
    return this._client.patch(
        `${environment.apiUrl}/utilisateur/updatePassword/${id}`,
        {
            oldPassword: oldPassword,
            newPassword: newPassword,
            confirmNewPassword: confirmNewPassword
        },
        {'headers' : headers}
    )
}
}
