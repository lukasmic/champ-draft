import { Component, OnInit } from '@angular/core'
import { Card, FactionCode } from '../models/card.model'
import { CardsService } from '../services/cards.service'
import { SettingsService } from '../services/settings.service'

@Component({
    selector: 'app-draft',
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {
    constructor(
        private _cardsService: CardsService,
        private _settingsService: SettingsService
    ) {}

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
        var cardTypes = this._settingsService.chosenAspects
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
            this.presentedChoices[0]
        })
    }

    selectChoice(card: Card): void {
        this.selectedChoices.push(card)
        this.selectedChoices.sort((a, b) => {
            if (a.faction_name.toString() != b.faction_name.toString()) {
                if (a.faction_name.toString() > b.faction_name.toString()) {
                    return 1
                }
                return -1
            }

            return a.type_name > b.type_name ? 1 : -1
        })
        this.presentNewChoices()
    }

    resetInvalidChoice(choiceNumber: number) {
        console.log('resetting choice number' + choiceNumber)
    }

    countToArray(i: number | undefined) {
        return new Array(i ?? 0)
    }
}
