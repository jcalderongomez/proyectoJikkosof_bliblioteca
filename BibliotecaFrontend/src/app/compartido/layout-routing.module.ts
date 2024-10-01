import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'; // Asegúrate de tener correctamente el path de LayoutComponent
import { ListarBibliotecaComponent } from '../biblioteca/listar-biblioteca/listar-biblioteca.component';
import { ListarMiembroComponent } from '../miembro/listar-miembro/listar-miembro.component';
import { ListarLibroComponent } from '../libro/listar-libro/listar-libro.component';
import { EditarLibroComponent } from '../libro/editar-libro/editar-libro.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // LayoutComponent se usa como contenedor
    children: [
      { path: 'biblioteca', component: ListarBibliotecaComponent },
      { path: 'miembro', component: ListarMiembroComponent },
      { path: 'libro', component: ListarLibroComponent },
      { path: 'libro/editar/:id', component: EditarLibroComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } // Redirigir a biblioteca por defecto
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Utiliza forChild ya que son rutas hijas
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
