import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { TalentsComponent } from "./components/talents/talents.component"

const routes: Routes = [
    {path: 'talents/:id', component: TalentsComponent},
    {path: 'talents', component: TalentsComponent},
    {path: '', redirectTo: 'talents', pathMatch: "full"},
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