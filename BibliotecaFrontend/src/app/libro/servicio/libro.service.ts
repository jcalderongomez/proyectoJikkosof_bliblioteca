import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDataLibro, Libro } from '../interfaces/IDataLibro';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private apiUrl = environment.apiUrl+'Libro'; // Cambia por la URL de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de libros
  getLibros(): Observable<IDataLibro> {
    return this.http.get<IDataLibro>(this.apiUrl);
  }

  // Método para agregar un nuevo libro (puedes extender según tus necesidades)
  agregarLibro(libro: any): Observable<IDataLibro> {
    return this.http.post<IDataLibro>(this.apiUrl, libro);
  }

  // Método para actualizar un libro existente
  actualizarLibro(libro: any): Observable<IDataLibro> {
    return this.http.put<IDataLibro>(`${this.apiUrl}/${libro.id}`, libro);
  }

  // Método para eliminar un libro
  eliminarLibro(id: number): Observable<IDataLibro> {
    return this.http.delete<IDataLibro>(`${this.apiUrl}/${id}`);
  }
  // Editar un libro existente
  editarLibro(id: number, libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(`${this.apiUrl}/${id}`, libro);
  }

  // Método para consultar un libro por ID
  consultarLibro(id: number): Observable<IDataLibro> {
    return this.http.get<IDataLibro>(`${this.apiUrl}/${id}`);
  }

    // Obtener un libro por ID
    obtenerLibroPorId(id: number): Observable<Libro> {
      return this.http.get<Libro>(`${this.apiUrl}/${id}`);
    }
}
