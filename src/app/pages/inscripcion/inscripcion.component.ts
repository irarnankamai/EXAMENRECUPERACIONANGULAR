import { Component, OnInit } from '@angular/core';
import { Inscripcion } from '../../../domain/inscripcion';
import { InscripcionService } from '../../services/inscripcion.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.scss'
})
export class InscripcionComponent implements OnInit {

  inscripciones: Inscripcion[] = [];
  selectedInscripcion: Inscripcion | null = null;
  cursoId: number | null = null;

  constructor(private inscripcionService: InscripcionService) { }

  ngOnInit(): void {
    this.loadInscripciones();
  }

  loadInscripciones(): void {
    this.inscripcionService.listInscripciones().subscribe(
      inscripciones => this.inscripciones = inscripciones,
      error => console.error('Error al cargar inscripciones', error)
    );
  }

  findByCurso(): void {
    if (this.cursoId !== null) {
      this.inscripcionService.findByCurso(this.cursoId).subscribe(
        inscripciones => this.inscripciones = inscripciones,
        error => console.error('Error al buscar inscripciones por curso', error)
      );
    } else {
      console.warn('Curso ID no especificado');
    }
  }

  selectInscripcion(inscripcion: Inscripcion): void {
    this.selectedInscripcion = inscripcion;
  }
}
