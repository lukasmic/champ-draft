import { HttpClient, HttpHandler } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'

import { CardsService } from './cards.service'

describe('CardsService', () => {
    let service: CardsService

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [HttpClient, HttpHandler] })
        service = TestBed.inject(CardsService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
})
