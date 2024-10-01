import { Component, OnInit } from '@angular/core';
import { MiembroService } from '../servicio/miembro.service';
import { IDataMiembro, Miembro } from '../interfaces/IDataMiembro';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-miembro',
  templateUrl: './listar-miembro.component.html',
  styleUrl: './listar-miembro.component.css'
})
export class ListarMiembroComponent
implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'librosPrestados', 'estado','Accion'];
  dataSource = new MatTableDataSource<Miembro>();

  constructor(private miembroService: MiembroService) {}

  ngOnInit(): void {
    this.mostrarMiembros();
  }

  mostrarMiembros(): void {
    this.miembroService.getMiembros().subscribe({
      next: (dataResponse: IDataMiembro) => {
        console.log(dataResponse);
        this.dataSource.data = dataResponse.resultado; // Asegúrate de que esto es correcto
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  editarMiembro(miembro: Miembro): void {
    // Lógica para editar la biblioteca (puedes abrir un modal o navegar a otro componente)
    console.log('Editar miembro:', miembro);
  }

  eliminarMiembro(id: number): void {
    // Lógica para eliminar la biblioteca
    this.miembroService.eliminarMiembro(id).subscribe({
      next: (response) => {
        if (response.isExitoso) {
          this.mostrarMiembros(); // Actualizar la lista después de eliminar
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
