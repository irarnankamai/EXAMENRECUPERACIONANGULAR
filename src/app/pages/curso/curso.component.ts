import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Curso } from '../../../domain/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.scss'
})
export class CursoComponent implements OnInit {

  cursos: Curso[] = [];
  selectedCurso: Curso | null = null;

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.loadCursos();
  }

  loadCursos(): void {
    this.cursoService.listCursos().subscribe(
      cursos => this.cursos = cursos,
      error => console.error('Error al cargar cursos', error)
    );
  }

  selectCurso(curso: Curso): void {
    this.selectedCurso = curso;
  }
}
