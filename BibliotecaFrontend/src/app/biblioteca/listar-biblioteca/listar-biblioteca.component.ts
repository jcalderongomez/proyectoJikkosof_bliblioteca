import { Component, OnInit } from '@angular/core';
import { Biblioteca, IDataBiblioteca } from '../interfaces/IDataBibliioteca';
import { BibliotecaService } from '../servicio/biblioteca.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CrearBibliotecaComponent } from '../crear-biblioteca/crear-biblioteca.component';

@Component({
  selector: 'app-listar-biblioteca',
  templateUrl: './listar-biblioteca.component.html',
  styleUrl: './listar-biblioteca.component.css'
})
export class ListarBibliotecaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'ubicacion','Accion'];
  dataSource = new MatTableDataSource<Biblioteca>();

  constructor(private bibliotecaService: BibliotecaService, private dialog: MatDialog) {}

  nuevaBiblioteca(){
    this.dialog.open(CrearBibliotecaComponent,{disableClose:true, width:'400px'})
      .afterClosed()
      .subscribe((resultado)=>{
      if(resultado == 'true') this.mostrarBibliotecas();
    })
  }
  ngOnInit(): void {
    this.mostrarBibliotecas();
  }

  mostrarBibliotecas(): void {
    this.bibliotecaService.getBibliotecas().subscribe({
      next: (dataResponse: IDataBiblioteca) => {
        console.log(dataResponse);
        this.dataSource.data = dataResponse.resultado; // Asegúrate de que esto es correcto
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  editarBiblioteca(biblioteca: Biblioteca): void {
    // Lógica para editar la biblioteca (puedes abrir un modal o navegar a otro componente)
    console.log('Editar biblioteca:', biblioteca);
  }

  eliminarBiblioteca(id: number): void {
    // Lógica para eliminar la biblioteca
    this.bibliotecaService.eliminarBiblioteca(id).subscribe({
      next: (response) => {
        if (response.isExitoso) {
          this.mostrarBibliotecas(); // Actualizar la lista después de eliminar
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
