import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Card } from '../models/card.model'

@Injectable({
    providedIn: 'root'
})
export class CardsService {
    constructor(private httpClient: HttpClient) {}
    url = environment.url

    public getAll(): Observable<Card[]> {
        return this.httpClient.get<any>(this.url + 'public/cards/')
    }
}
