import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AspectChoiceComponent } from './setup/aspect-choice/aspect-choice.component'

const routes: Routes = [
    { path: 'setup', component: AspectChoiceComponent },
    { path: '**', redirectTo: 'setup' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
