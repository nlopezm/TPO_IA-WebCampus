import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsistenciaComponent } from './asistencia/asistencia.component'

const routes: Routes = [
  {
    path: 'asistencia', component: AsistenciaComponent,
    data: { title: 'Asistencia' }
  },
  { path: '**', component: AsistenciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
