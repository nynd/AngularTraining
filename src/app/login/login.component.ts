import { Component, OnInit } from '@angular/core';
import { AuthenticationHttpService } from '../authentication-http-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public model: { login: string, password: string } = {
        login: "Enter your credential",
        password: ""
    };

    public authenticated: boolean = false;
    constructor(private authenticationHttpService: AuthenticationHttpService) { }

    ngOnInit(): void {
    }

    onFormSubmitted() {
        this.authenticated = true;
        console.log(this.model.login + ' ' + this.model.password);
        this.authenticationHttpService.authentication(this.model.login, this.model.password);
    }

}
