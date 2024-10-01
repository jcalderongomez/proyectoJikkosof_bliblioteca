import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarBibliotecaComponent } from './listar-biblioteca/listar-biblioteca.component';
import { EliminarBibliotecaComponent } from './eliminar-biblioteca/eliminar-biblioteca.component';
import { ConsultarBibliotecaComponent } from './consultar-biblioteca/consultar-biblioteca.component';
import { CrearBibliotecaComponent } from './crear-biblioteca/crear-biblioteca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CompartidoModule } from '../compartido/compartido.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ListarBibliotecaComponent,
    EliminarBibliotecaComponent,
    ConsultarBibliotecaComponent,
    CrearBibliotecaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    CompartidoModule,
    MaterialModule
  ]
})
export class BibliotecaModule { }
