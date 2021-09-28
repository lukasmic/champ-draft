import { Component, OnInit } from '@angular/core'
import { CardsService } from './services/cards.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'champ-draft'
    constructor(private _cardsService: CardsService) {}

    ngOnInit(): void {
        this._cardsService.setDeckbuildCards()
    }
}
