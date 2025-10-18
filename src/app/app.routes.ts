import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { EmergenciaComponent } from './components/emergencia/emergencia';
import { FaqComponent } from './components/faq/faq';
import { ConscientizacaoComponent } from './components/conscientizacao/conscientizacao';
import { NgModule } from '@angular/core';
import { AlertaComponent } from './components/alerta/alerta';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'emergencia', component: EmergenciaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'conscientizacao', component: ConscientizacaoComponent },
  { path: 'alerta', component: AlertaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}