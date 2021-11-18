import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './login/login.component';
import { TalentModule } from './talent/talent.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatSidenavModule,
        RouterModule,
        CommonModule,
        TalentModule,
        FormsModule,
        MatInputModule,
        MatButtonModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
