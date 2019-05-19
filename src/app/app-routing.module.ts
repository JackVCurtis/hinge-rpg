import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { NarratorComponent } from './narrator/narrator.component';

const routes: Routes = [
	  { path: '', component: HomeComponent },
  	  { path: 'narrators', component: NarratorComponent },
  	  { path: 'characters', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
