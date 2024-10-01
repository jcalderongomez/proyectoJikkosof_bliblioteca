import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biblioteca, IDataBiblioteca } from '../interfaces/IDataBibliioteca';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private apiUrl = 'http://tu-api-url/api/bibliotecas'; // Reemplaza esto con tu URL de API real

  constructor(private http: HttpClient) { }

  // Obtener todas las bibliotecas
  listarBibliotecas(): Observable<IDataBiblioteca> {
    return this.http.get<IDataBiblioteca>(this.apiUrl);
  }

  // Obtener una biblioteca por su ID
  obtenerBibliotecaPorId(id: number): Observable<Biblioteca> {
    return this.http.get<Biblioteca>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva biblioteca
  crearBiblioteca(biblioteca: Biblioteca): Observable<IDataBiblioteca> {
    return this.http.post<IDataBiblioteca>(this.apiUrl, biblioteca);
  }

  // Actualizar una biblioteca
  editarBiblioteca(biblioteca: Biblioteca): Observable<IDataBiblioteca> {
    return this.http.put<IDataBiblioteca>(`${this.apiUrl}/${biblioteca.id}`, biblioteca);
  }

  // Eliminar una biblioteca
  eliminarBiblioteca(id: number): Observable<IDataBiblioteca> {
    return this.http.delete<IDataBiblioteca>(`${this.apiUrl}/${id}`);
  }
}
