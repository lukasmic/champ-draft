import { Component } from '@angular/core';
import { FactionCode } from 'src/app/models/card.model';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
    selector: 'app-aspect-choice',
    templateUrl: './aspect-choice.component.html',
    styleUrls: ['./aspect-choice.component.scss'],
})
export class AspectChoiceComponent {
    constructor(private _settingsService: SettingsService) {}

    aspectChoices = {
        name: 'All Aspects',
        completed: this._settingsService.isAllAspectsSelected(),
        color: 'primary',
        aspect: [
            {
                name: FactionCode.Aggression,
                completed: this._settingsService.isAggressionSelected(),
                color: 'primary',
            },
            {
                name: FactionCode.Justice,
                completed: this._settingsService.isJusticeSelected(),
                color: 'primary',
            },
            {
                name: FactionCode.Leadership,
                completed: this._settingsService.isLeadershipSelected(),
                color: 'primary',
            },
            {
                name: FactionCode.Protection,
                completed: this._settingsService.isProtectionSelected(),
                color: 'primary',
            },
            {
                name: FactionCode.Pool,
                completed: this._settingsService.isPoolSelected(),
                color: 'primary',
            },
        ],
    };

    allComplete: boolean = this.aspectChoices.completed;

    updateAllComplete() {
        this.allComplete =
            this.aspectChoices.aspect != null &&
            this.aspectChoices.aspect.every((t) => t.completed);
    }

    someComplete(): boolean {
        if (this.aspectChoices.aspect == null) {
            return false;
        }
        return (
            this.aspectChoices.aspect.filter((t) => t.completed).length > 0 &&
            !this.allComplete
        );
    }

    setAll(completed: boolean) {
        this.allComplete = completed;
        if (this.aspectChoices.aspect == null) {
            return;
        }
        this.aspectChoices.aspect.forEach((t) => (t.completed = completed));
    }

    applySettings() {
        var chosenAspects: string[] = [];
        this.aspectChoices.aspect.forEach((a) => {
            if (a.completed) {
                chosenAspects.push(a.name);
            }
        });
        localStorage.setItem('chosenAspects', chosenAspects.toString());

        this._settingsService.chosenAspects = chosenAspects;
    }
}
