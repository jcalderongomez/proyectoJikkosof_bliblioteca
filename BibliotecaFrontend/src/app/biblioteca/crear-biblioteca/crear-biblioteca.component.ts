import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Biblioteca } from '../interfaces/IDataBibliioteca';
import { BibliotecaService } from '../servicio/biblioteca.service';
import Swal from 'sweetalert2'
import { error } from 'console';
@Component({
  selector: 'app-crear-biblioteca',
  templateUrl: './crear-biblioteca.component.html',
  styleUrl: './crear-biblioteca.component.css'
})
export class CrearBibliotecaComponent implements OnInit {

  formBiblioteca : FormGroup;
  titulo: string= "Agreagar";
  nombreBoton: string = "Guardar";

  constructor(private modal: MatDialogRef<CrearBibliotecaComponent>,
      @Inject (MAT_DIALOG_DATA) public datosBiblioteca: Biblioteca,
      private fb: FormBuilder, private bibliotecaServicio: BibliotecaService){
        this.formBiblioteca = this.fb.group({
            nombreBiblioteca: ['', Validators.required],
            ubicacion: ['', Validators.required],
        })
      }

  ngOnInit(): void {
    if(this.datosBiblioteca != null){
      this.formBiblioteca.patchValue({
        nombreBiblioteca : this.datosBiblioteca.nombre,
        ubicacion : this.datosBiblioteca.ubicacion
      })
    }
  }

    crearModificarBiblioteca(){
      const biblioteca: Biblioteca = {
        id: this.datosBiblioteca == null ? 0 : this.datosBiblioteca.id,
        nombre: this.formBiblioteca.value.nombre,
        ubicacion: this.formBiblioteca.value.ubicacion
      }
      if (this.datosBiblioteca== null){
        this.bibliotecaServicio.agregarBiblioteca(biblioteca).subscribe({
          next:  (data) => {
            if(data.isExitoso){
              Swal.fire("agregada!");
              this.modal.close("true");
            }
            else {
              Swal.fire("agregada!");
            }
          },
          error: (e) => {}
        })
      }
      else{
        this.bibliotecaServicio.editarBiblioteca(biblioteca).subscribe({
          next:  (data) => {
            if(data.isExitoso){
              Swal.fire("agregada!");
              this.modal.close("true");
            }
            else {
              Swal.fire("agregada!");
            }
          },
          error: (e) => {}
        })
      }
    }
  }

