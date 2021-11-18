import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationHttpService {

    constructor(private httpClient: HttpClient) { }

    public authentication(login: string, password: string) {
        this.httpClient.post("http://monserverdautification.com",
            { login: login, password: password }
        );
    }
}
