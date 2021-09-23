import { Component, OnInit } from '@angular/core'
import { Card } from './models/card.model'
import { CardsService } from './services/cards.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'champ-draft'
    constructor(private cardsService: CardsService) {}

    private input?: Card[]

    ngOnInit(): void {
        this.cardsService
            .getAll()
            .subscribe((a) => console.log('a :>> ', a[0].url))
    }
}
