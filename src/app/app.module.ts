import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { NarratorComponent } from './narrator/narrator.component';
import { CharacterComponent } from './character/character.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SlideNavComponent } from './slide-nav/slide-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NarratorComponent,
    CharacterComponent,
    NavMenuComponent,
    SlideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
