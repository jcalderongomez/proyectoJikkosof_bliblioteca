import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarMiembroComponent } from './listar-miembro/listar-miembro.component';
import { EditarMiembroComponent } from './editar-miembro/editar-miembro.component';
import { EliminarMiembroComponent } from './eliminar-miembro/eliminar-miembro.component';
import { CrearMiembroComponent } from './crear-miembro/crear-miembro.component';
import { ConsultarMiembroComponent } from './consultar-miembro/consultar-miembro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ListarMiembroComponent,
    EditarMiembroComponent,
    EliminarMiembroComponent,
    CrearMiembroComponent,
    ConsultarMiembroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule
  ]
})
export class MiembroModule { }
