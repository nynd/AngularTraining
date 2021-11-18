import { Component, Input, OnInit } from '@angular/core';
import { Talent } from '../models/random-user-api.model';

@Component({
    selector: 'app-talent-card',
    templateUrl: './talent-card.component.html',
    styleUrls: ['./talent-card.component.scss']
})
export class TalentCardComponent implements OnInit {

    @Input() talent: Talent;
    constructor() { }

    ngOnInit(): void {
    }

}
