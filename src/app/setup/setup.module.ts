import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AspectChoiceComponent } from './aspect-choice/aspect-choice.component'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'

@NgModule({
    declarations: [AspectChoiceComponent],
    imports: [
        CommonModule,
        MatCheckboxModule,
        MatButtonModule,
        CommonModule,
        FormsModule
    ]
})
export class SetupModule {}
