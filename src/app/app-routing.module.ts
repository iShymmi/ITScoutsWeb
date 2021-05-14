import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { TalentsComponent } from "./components/talents/talents.component"

const routes: Routes = [
    {path: '', redirectTo: 'talents', pathMatch: "full"},
    {path: 'talents', component: TalentsComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
export const routingComponents = [
    TalentsComponent
]