import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscripcion } from '../../domain/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {


  private apiUrl = 'http://localhost:8080/Examen64NankamaiIrar/rs/inscripcion';  // URL de tu API REST

  constructor(private http: HttpClient) { }

  // Obtener todas las inscripciones
  listInscripciones(): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(this.apiUrl);
  }

  // Buscar inscripciones por curso
  findByCurso(cursoId: number): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(`${this.apiUrl}/curso/${cursoId}`);
  }

  // Obtener inscripción por ID
  getInscripcion(codigo: number): Observable<Inscripcion> {
    return this.http.get<Inscripcion>(`${this.apiUrl}/${codigo}`);
  }

  // Crear nueva inscripción
  createInscripcion(inscripcion: Inscripcion): Observable<Inscripcion> {
    return this.http.post<Inscripcion>(this.apiUrl, inscripcion);
  }

  // Actualizar inscripción existente
  updateInscripcion(inscripcion: Inscripcion): Observable<Inscripcion> {
    return this.http.put<Inscripcion>(this.apiUrl, inscripcion);
  }

  // Eliminar inscripción
  deleteInscripcion(codigo: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}?codigo=${codigo}`);
  }
}
