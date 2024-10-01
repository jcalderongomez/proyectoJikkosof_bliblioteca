import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/layout', pathMatch: 'full' }, // Redirigir a la ruta del layout por defecto
  {
    path: 'layout',
    loadChildren: () => import('./compartido/compartido.module').then(m => m.CompartidoModule) // Lazy loading para CompartidoModule
  },
  { path: '**', redirectTo: '/layout' } // Redirigir a layout si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
