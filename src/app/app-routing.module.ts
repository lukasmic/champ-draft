import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DraftComponent } from './draft/draft.component'
import { AspectChoiceComponent } from './setup/aspect-choice/aspect-choice.component'

const routes: Routes = [
    { path: 'setup', component: AspectChoiceComponent },
    { path: 'draft', component: DraftComponent },
    { path: '**', redirectTo: 'draft' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
