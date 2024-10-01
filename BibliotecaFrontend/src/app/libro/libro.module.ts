import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarLibroComponent } from './listar-libro/listar-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { EliminarLibroComponent } from './eliminar-libro/eliminar-libro.component';
import { ConsultarLibroComponent } from './consultar-libro/consultar-libro.component';
import { CreaarLibroComponent } from './creaar-libro/creaar-libro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ListarLibroComponent,
    EditarLibroComponent,
    EliminarLibroComponent,
    ConsultarLibroComponent,
    CreaarLibroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MaterialModule
  ]
})
export class LibroModule { }
