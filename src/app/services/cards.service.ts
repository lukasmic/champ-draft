import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { Card, FactionCode } from '../models/card.model'

@Injectable({
    providedIn: 'root'
})
export class CardsService {
    constructor(private httpClient: HttpClient) {}
    url = environment.url
    draftPool: Card[] = []

    /**
     * Get all available cards and filter out duplicates
     */
    public getAll(): Observable<Card[]> {
        return this.httpClient
            .get<Card[]>(this.url + 'public/cards/')
            .pipe(
                map((cards) => cards.filter((card) => !card.duplicate_of_code))
            )
    }

    public setDeckbuildCards(): void {
        this.draftPool = []

        var cardTypes = localStorage.getItem('chosenAspects')?.split(',')
        !cardTypes?.includes('')
            ? cardTypes?.push('basic')
            : (cardTypes = ['basic'])

        this.getAll().subscribe((a) =>
            a
                .filter(
                    (card) =>
                        card.faction_code != FactionCode.Campaign &&
                        card.faction_code != FactionCode.Hero &&
                        cardTypes?.includes(card.faction_code)
                )
                .map((filteredCard) => this.draftPool.push(<Card>filteredCard))
        )
        console.log('this.draftPool :>> ', this.draftPool)
    }
}
