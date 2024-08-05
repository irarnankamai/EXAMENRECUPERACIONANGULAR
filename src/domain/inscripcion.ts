import { Curso } from "./curso";

export interface Inscripcion {
    codigo: number;
    cedulaAlumno: string;
    nombreAlumno: string;
    apellidoAlumno: string;
    fechaInscripcion: string; // Usamos string para manejar la fecha en formato ISO
    curso: Curso; // Relación con Curso
  }