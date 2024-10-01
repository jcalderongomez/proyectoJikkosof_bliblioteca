import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IDataMiembro, Miembro } from '../interfaces/IDataMiembro';

@Injectable({
  providedIn: 'root'
})
export class MiembroService {
  private apiUrl = environment.apiUrl+'Miembro'; // Cambia por la URL de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de miembros
  getMiembros(): Observable<IDataMiembro> {
    return this.http.get<IDataMiembro>(this.apiUrl);
  }

  // Método para agregar un nuevo miembro (puedes extender según tus necesidades)
  agregarMiembro(miembro: any): Observable<IDataMiembro> {
    return this.http.post<IDataMiembro>(this.apiUrl, miembro);
  }

  // Método para actualizar un miembro existente
  actualizarMiembro(miembro: any): Observable<IDataMiembro> {
    return this.http.put<IDataMiembro>(`${this.apiUrl}/${miembro.id}`, miembro);
  }

  // Método para eliminar un miembro
  eliminarMiembro(id: number): Observable<IDataMiembro> {
    return this.http.delete<IDataMiembro>(`${this.apiUrl}/${id}`);
  }

  // Método para consultar un miembro por ID
  consultarMiembro(id: number): Observable<IDataMiembro> {
    return this.http.get<IDataMiembro>(`${this.apiUrl}/${id}`);
  }
}
