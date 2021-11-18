import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TalentCardComponent } from './talent-card/talent-card.component';
import { TalentListComponent } from './talent-list/talent-list.component';


@NgModule({
    declarations: [
        TalentListComponent,
        TalentCardComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        HttpClientModule

    ],
    providers: [
    ]
})
export class TalentModule { }
