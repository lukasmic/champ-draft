import { Component } from '@angular/core'
import { FactionCode } from 'src/app/models/card.model'

@Component({
    selector: 'app-aspect-choice',
    templateUrl: './aspect-choice.component.html',
    styleUrls: ['./aspect-choice.component.scss']
})
export class AspectChoiceComponent {
    constructor() {}

    aspectChoices = {
        name: 'All Aspects',
        completed: false,
        color: 'primary',
        aspect: [
            {
                name: FactionCode.Aggression,
                completed: false,
                color: 'primary'
            },
            { name: FactionCode.Justice, completed: false, color: 'primary' },
            {
                name: FactionCode.Leadership,
                completed: false,
                color: 'primary'
            },
            { name: FactionCode.Protection, completed: false, color: 'primary' }
        ]
    }

    allComplete: boolean = false

    updateAllComplete() {
        this.allComplete =
            this.aspectChoices.aspect != null &&
            this.aspectChoices.aspect.every((t) => t.completed)
    }

    someComplete(): boolean {
        if (this.aspectChoices.aspect == null) {
            return false
        }
        return (
            this.aspectChoices.aspect.filter((t) => t.completed).length > 0 &&
            !this.allComplete
        )
    }

    setAll(completed: boolean) {
        this.allComplete = completed
        if (this.aspectChoices.aspect == null) {
            return
        }
        this.aspectChoices.aspect.forEach((t) => (t.completed = completed))
    }

    applySettings() {
        var chosenAspects: string[] = []
        this.aspectChoices.aspect.forEach((a) => {
            if (a.completed) {
                chosenAspects.push(a.name)
            }
        })
        console.log('chosenAspects :>> ', chosenAspects)
        localStorage.setItem('chosenAspects', chosenAspects.toString())
    }
}
