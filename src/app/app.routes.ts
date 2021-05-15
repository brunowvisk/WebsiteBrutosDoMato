import { Routes } from '@angular/router';
import { ContatoComponent } from './institucional/contato/contato.component';
import { GaleriaComponent } from './institucional/galeria/galeria.component';
import { PelejasComponent } from './institucional/pelejas/pelejas.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'pelejas', component: PelejasComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'galeria', component: GaleriaComponent},
    {path: 'contato', component: ContatoComponent}
];
