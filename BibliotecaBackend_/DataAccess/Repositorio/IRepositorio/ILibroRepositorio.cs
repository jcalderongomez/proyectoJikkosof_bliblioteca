using Models.Entidades;

namespace DataAcces.Repositorio.IRepositorio
{
    public interface ILibroRepositorio: IRepositorio<Libro>
    {
        void Actualizar(Libro libro);
    }
}
