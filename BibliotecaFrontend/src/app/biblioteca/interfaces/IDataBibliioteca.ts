export interface IDataBiblioteca {
  isExitoso: boolean;
  resultado: Biblioteca[];
  mensaje:   string;
}

export interface Biblioteca {
  id:        number;
  nombre:    string;
  ubicacion: string;
}
