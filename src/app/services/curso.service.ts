import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../../domain/curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {


  private apiUrl = 'http://localhost:8080/Examen64NankamaiIrar/rs/curso'; // URL de tu API REST

  constructor(private http: HttpClient) { }

  // Obtener todos los cursos
  listCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }

  // Obtener curso por ID
  getCurso(codigo: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiUrl}/${codigo}`);
  }

  // Crear nuevo curso
  createCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, curso);
  }

  // Actualizar curso existente
  updateCurso(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(this.apiUrl, curso);
  }

  // Eliminar curso
  deleteCurso(codigo: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}?codigo=${codigo}`);
  }
}
