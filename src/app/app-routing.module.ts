import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './HeroPage/heroes/heroes.component';
import { DashboardComponent } from './HeroPage/dashboard/dashboard.component';
import { HeroDetailComponent } from './HeroPage/hero-detail/hero-detail.component';
import { HomeComponent } from './home/home.component';
import { PokePageComponent } from './PokePage/poke-page/poke-page.component'

import { HeroPageComponent } from './HeroPage/hero-page/hero-page.component';

type TPath = "" | "/hero" | "/poke" //for header
type TName = "Home" | "Heroes" | "Poke"

export type TNavigation = {
  path : TPath;
  name : TName;
}


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },

  { path: 'hero',
    // redirectTo: '/hero/dashboard',
    component: HeroPageComponent,
    children:[
      { path: '', redirectTo: 'heroes', pathMatch: 'full' },
      { path: 'heroes', component: HeroesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'detail/:id', component: HeroDetailComponent},
  ]},


  {path: 'poke', component : PokePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
