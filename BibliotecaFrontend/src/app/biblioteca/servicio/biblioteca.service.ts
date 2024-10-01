import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biblioteca, IDataBiblioteca } from '../interfaces/IDataBibliioteca';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {


  private apiUrl = environment.apiUrl+'Biblioteca'; // Cambia por la URL de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de bibliotecas
  getBibliotecas(): Observable<IDataBiblioteca> {
    return this.http.get<IDataBiblioteca>(this.apiUrl);
  }

  // Método para agregar un nuevo biblioteca (puedes extender según tus necesidades)
  agregarBiblioteca(biblioteca: any): Observable<IDataBiblioteca> {
    return this.http.post<IDataBiblioteca>(this.apiUrl, biblioteca);
  }

  // Método para actualizar un biblioteca existente
  actualizarBiblioteca(biblioteca: any): Observable<IDataBiblioteca> {
    return this.http.put<IDataBiblioteca>(`${this.apiUrl}/${biblioteca.id}`, biblioteca);
  }

  // Método para eliminar un biblioteca
  eliminarBiblioteca(id: number): Observable<IDataBiblioteca> {
    return this.http.delete<IDataBiblioteca>(`${this.apiUrl}/${id}`);
  }

  // Método para consultar un biblioteca por ID
  consultarBiblioteca(id: number): Observable<IDataBiblioteca> {
    return this.http.get<IDataBiblioteca>(`${this.apiUrl}/${id}`);
  }


  // Actualizar una biblioteca
  editarBiblioteca(biblioteca: Biblioteca): Observable<IDataBiblioteca> {
    return this.http.put<IDataBiblioteca>(`${this.apiUrl}/${biblioteca.id}`, biblioteca);
  }
}
