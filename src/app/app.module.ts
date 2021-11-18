import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { TalentListComponent } from './talent/talent-list/talent-list.component';
@NgModule({
    declarations: [
        AppComponent,
        TalentListComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatSidenavModule,
        MatCardModule,
        RouterModule,
        HttpClientModule,
        CommonModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
