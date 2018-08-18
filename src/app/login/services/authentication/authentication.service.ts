import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import  { UserAuthenticationModel } from '../../model/user-authentication/user-authentication.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthenticationService {

    private readonly URL = 'http://52.90.49.68:8080/security/oauth/token';

    constructor (private http:HttpClient) {}

    public authentication (user : UserAuthenticationModel) : Observable<any> {

        const formData = new FormData();
        formData.append('grant_type', environment.grant_type);
        formData.append('password', user.password);
        formData.append('username', user.username);
        formData.append('client_id', environment.client_id);


    
        const headers = new HttpHeaders({ 'Authorization': environment.authorization });

        return this.http.post(this.URL, formData, { headers: headers });
    }

}