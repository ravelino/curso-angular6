import { Injectable } from "@angular/core";
import { UserModel } from "../../models/user/user.model";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class UserService {

    constructor (private httpClient : HttpClient) {}

    private readonly URL = 'https://0232f6df-9879-4a25-ba58-3848732a2b52.mock.pstmn.io';
                            //
    public getAll() : Observable <UserModel []> {
        return this.httpClient.get<UserModel []>(`${this.URL}/api/users`);        
    }

    public getId(id : number) : Observable <UserModel> {
        let params : HttpParams = new HttpParams();
        params.append('id',id.toString());
        return this.httpClient.get<UserModel>(`${this.URL}/api/users`);       
    }

}