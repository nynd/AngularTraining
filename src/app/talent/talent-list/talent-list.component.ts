import { Component, OnInit } from '@angular/core';
import { RandomUserAPI, Talent } from '../models/random-user-api.model';
import { RandomUserHttpService } from '../random-user-http.service';

@Component({
    selector: 'app-talent-list',
    templateUrl: './talent-list.component.html',
    styleUrls: ['./talent-list.component.scss']
})
export class TalentListComponent implements OnInit {

    public list?: Talent[];

    constructor(private httpService: RandomUserHttpService) { }

    ngOnInit(): void {
        this.getTalentList();
    }

    private getTalentList(): void {
        this.httpService.getAllTalents().subscribe(

            (data: RandomUserAPI) => {
                this.list = data.results;
            }

        );
    }

}
