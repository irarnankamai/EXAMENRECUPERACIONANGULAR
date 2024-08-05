import { Routes } from '@angular/router';
import { CursoComponent } from './pages/curso/curso.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';

export const routes: Routes = [
    { path: 'curso', component: CursoComponent },
    { path: 'inscripcion', component: InscripcionComponent },
];
