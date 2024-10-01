export interface IDataMiembro {
  isExitoso: boolean;
  resultado: Miembro[];
  mensaje:   string;
}

export interface Miembro {
  id:              number;
  nombre:          string;
  librosPrestados: null;
  estado:          boolean;
}
