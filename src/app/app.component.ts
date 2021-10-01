import { MediaMatcher } from '@angular/cdk/layout'
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    title = 'champ-draft'
    private _mobileQueryListener: () => void

    mobileQuery: MediaQueryList
    opened: boolean = false

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)')
        this._mobileQueryListener = () => changeDetectorRef.detectChanges()
        this.mobileQuery.addListener(this._mobileQueryListener)
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener)
    }
}
