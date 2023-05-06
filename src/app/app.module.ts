import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectComponent } from './direct/direct.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { StreamComponent } from './stream/stream.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CinemaComponent } from './programmes/cinema/cinema.component';
import { DivertissementsComponent } from './programmes/divertissements/divertissements.component';
import { InfoComponent } from './programmes/info/info.component';
import { JeunesseComponent } from './programmes/jeunesse/jeunesse.component';
import { TousComponent } from './programmes/tous/tous.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectComponent,
    ProgrammesComponent,
    StreamComponent,
    LandingPageComponent,
    CinemaComponent,
    DivertissementsComponent,
    InfoComponent,
    JeunesseComponent,
    TousComponent,
    HeaderComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
