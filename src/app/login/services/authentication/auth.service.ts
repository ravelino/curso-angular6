import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { UserAuthenticationModel } from "../../model/user-authentication/user-authentication.model";
import {map} from 'rxjs/operators';
import { Observable } from "rxjs";


@Injectable()
export class AuthService {

    constructor(private authService: AuthenticationService) { }


    public signIn(userAuthentication: UserAuthenticationModel): Observable<any> {
        return this.authService.authentication(userAuthentication).pipe(
            map(result => localStorage.setItem('token', result['access_token']))
        );
    }

    public singOut() {
        localStorage.clear();
    }

    public isAuthenticate() {
        const authenticate = localStorage.getItem('token');
        return authenticate != null;
    }
}