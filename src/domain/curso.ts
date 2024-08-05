import { Inscripcion } from "./inscripcion";

  export interface Curso {
    codigo: number;
    nombre: string;
    cupo: number;
    fechaInicio: string;  
    inscripciones?: Inscripcion[]; // Opcional, ya que las inscripciones podrían no ser necesarias en todos los casos
  }