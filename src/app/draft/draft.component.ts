import { Component, OnInit } from '@angular/core'
import { Card, FactionCode } from '../models/card.model'
import { CardsService } from '../services/cards.service'

@Component({
    selector: 'app-draft',
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {
    constructor(private _cardsService: CardsService) {}

    draftChoiceAmount = 3
    presentedChoices: Card[] = []
    possibleChoices: Card[] = []
    selectedChoices: Card[] = []

    ngOnInit(): void {
        this._cardsService.setDeckbuildCards()
        this.presentNewChoices()
    }

    presentNewChoices() {
        this.presentedChoices = []
        var cardTypes = localStorage.getItem('chosenAspects')?.split(',')
        !cardTypes?.includes('')
            ? cardTypes?.push('basic')
            : (cardTypes = ['basic'])

        this._cardsService.getAll().subscribe((cards) => {
            this.possibleChoices = cards.filter(
                (card) =>
                    card.faction_code != FactionCode.Campaign &&
                    card.faction_code != FactionCode.Hero &&
                    cardTypes?.includes(card.faction_code)
            )

            for (
                let choiceCount = 0;
                choiceCount < this.draftChoiceAmount;
                choiceCount++
            ) {
                this.presentedChoices.push(
                    this.possibleChoices[
                        Math.floor(Math.random() * this.possibleChoices.length)
                    ]
                )
            }
        })
    }

    selectChoice(card: Card): void {
        this.selectedChoices.push(card)
        this.presentNewChoices()
    }

    resetInvalidChoice(choiceNumber: number) {
        console.log('resetting choice number' + choiceNumber)
    }
}
