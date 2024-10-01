import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibroService } from '../servicio/libro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {
  editarLibroForm: FormGroup;
  libroId: number=0;

  constructor(
    private fb: FormBuilder,
    private libroService: LibroService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editarLibroForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      isbn: ['', Validators.required],
      disponible: [true, Validators.required]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
  if (idParam) {
    this.libroId = Number(idParam);
    this.cargarLibro();
  } else {
    // Manejar el caso en que el ID no esté disponible
    console.error('ID no encontrado en los parámetros de la ruta.');
  }
  }

  cargarLibro() {
    this.libroService.obtenerLibroPorId(this.libroId).subscribe(libro => {
      this.editarLibroForm.patchValue(libro);
    });
  }

  onSubmit() {
    if (this.editarLibroForm.valid) {
      this.libroService.editarLibro(this.libroId, this.editarLibroForm.value).subscribe(() => {
        // Redirigir o mostrar mensaje de éxito
        this.router.navigate(['/libros']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/libros']); // Redirigir a la lista de libros
  }
}
