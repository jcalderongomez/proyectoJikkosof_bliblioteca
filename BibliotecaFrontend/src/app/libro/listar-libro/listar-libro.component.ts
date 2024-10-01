import { Component, OnInit } from '@angular/core';
import { LibroService } from '../servicio/libro.service';
import { IDataLibro, Libro } from '../interfaces/IDataLibro';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html',
  styleUrls: ['./listar-libro.component.css'],
})

export class ListarLibroComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'autor', 'isbn','Accion'];
  dataSource = new MatTableDataSource<Libro>();

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.mostrarLibros();
  }

  mostrarLibros(): void {
    this.libroService.getLibros().subscribe({
      next: (dataResponse: IDataLibro) => {
        console.log(dataResponse);
        this.dataSource.data = dataResponse.resultado; // Asegúrate de que esto es correcto
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  editarLibro(libro: Libro): void {
    // Lógica para editar la biblioteca (puedes abrir un modal o navegar a otro componente)
    console.log('Editar libro:', libro);
  }

  eliminarLibro(id: number): void {
    // Lógica para eliminar la biblioteca
    this.libroService.eliminarLibro(id).subscribe({
      next: (response) => {
        if (response.isExitoso) {
          this.mostrarLibros(); // Actualizar la lista después de eliminar
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
