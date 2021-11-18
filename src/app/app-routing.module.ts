import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { TalentListComponent } from './talent/talent-list/talent-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'talents', component: TalentListComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
