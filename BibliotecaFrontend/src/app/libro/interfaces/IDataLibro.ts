export interface IDataLibro {
  isExitoso: boolean;
  resultado: Libro[];
  mensaje:   string;
}

export interface Libro {
  id:           number;
  titulo:       string;
  autor:        string;
  isbn:         string;
  bibliotecaId: number;
  biblioteca:   null;
  disponible:   boolean;
}
