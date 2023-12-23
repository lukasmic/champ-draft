import { Injectable } from '@angular/core';
import { FactionCode } from '../models/card.model';

@Injectable({
    providedIn: 'root',
})
export class SettingsService {
    constructor() {}

    chosenAspects: string[] | undefined = localStorage
        .getItem('chosenAspects')
        ?.split(',');

    isAggressionSelected(): boolean {
        return this.chosenAspects?.includes(FactionCode.Aggression) ?? false;
    }

    isJusticeSelected(): boolean {
        return this.chosenAspects?.includes(FactionCode.Justice) ?? false;
    }

    isLeadershipSelected(): boolean {
        return this.chosenAspects?.includes(FactionCode.Leadership) ?? false;
    }

    isProtectionSelected(): boolean {
        return this.chosenAspects?.includes(FactionCode.Protection) ?? false;
    }

    isPoolSelected(): boolean {
        return this.chosenAspects?.includes(FactionCode.Pool) ?? false;
    }

    isAllAspectsSelected(): boolean {
        return (
            this.isAggressionSelected() &&
            this.isJusticeSelected() &&
            this.isLeadershipSelected() &&
            this.isProtectionSelected() &&
            this.isPoolSelected()
        );
    }
}
