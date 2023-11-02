import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './rick-wiki/pages/character-page/character-page.component';

const routes: Routes = [
  {path: 'characters', component: CharacterPageComponent},
  // {path: 'episodes', component: EpisodesComponent},
  // {path: 'locations', component: LocationsComponent},
  {path: '**', redirectTo: 'characters'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
