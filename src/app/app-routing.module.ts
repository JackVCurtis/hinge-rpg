import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { NarratorComponent } from './narrator/narrator.component';

const routes: Routes = [
	  { path: '', component: HomeComponent },
  	  { path: 'narrator', component: NarratorComponent },
  	  { path: 'characters', component: CharactersComponent },
  	  { path: 'characters/:id', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
