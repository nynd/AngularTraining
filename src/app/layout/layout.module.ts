import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SidenavComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        SidenavComponent
    ]
})
export class LayoutModule { }
