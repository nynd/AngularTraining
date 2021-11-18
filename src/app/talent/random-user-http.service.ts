import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUserAPI } from './models/random-user-api.model';

@Injectable({
    providedIn: 'root'
})
export class RandomUserHttpService {

    constructor(private httpClient: HttpClient) {
    }

    public getAllTalents(): Observable<RandomUserAPI> {
        return this.httpClient.get<RandomUserAPI>('https://randomuser.me/api/?seed=foobar&noinfo&inc=gender,name,nat,email,picture&results=20');
    }

}
