import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectComponent } from './direct/direct.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StreamComponent } from './stream/stream.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { CinemaComponent } from './programmes/cinema/cinema.component';
import { DivertissementsComponent } from './programmes/divertissements/divertissements.component';
import { InfoComponent } from './programmes/info/info.component';
import { JeunesseComponent } from './programmes/jeunesse/jeunesse.component';
import { TousComponent } from './programmes/tous/tous.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  
    { path: 'Direct', component: DirectComponent },
    { path: 'Stream', component: StreamComponent },
    { path: 'Programmes', component: ProgrammesComponent },
    { path: 'Programmes/Cinema', component: CinemaComponent },
    { path: 'Programmes/Divertissements', component: DivertissementsComponent },
    { path: 'Programmes/Info', component: InfoComponent },
    { path: 'Programmes/Jeunesse', component: JeunesseComponent },
    { path: 'Programmes/Tous', component: TousComponent },
    { path: 'Header', component: HeaderComponent },
    { path: 'Accueil', component: AccueilComponent },
    { path: '**', redirectTo: 'Accueil' },
    { path: '', component: LandingPageComponent }

];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ]
    }
)
export class AppRoutingModule {}