import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/model/user.model';


@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
    public tabUser: User[];
    constructor(private data: UserService) {}


    ngOnInit() {
        this.data.getUser().subscribe(data => {
            this.tabUser = data;
            console.log(data);
        });
    }

    getImc() {
        const w = this.tabUser[0].weight;
        const h = this.tabUser[0].height;
        const imc = Math.round((w / (h * h)) * 10000);
        return imc;
    }
}






