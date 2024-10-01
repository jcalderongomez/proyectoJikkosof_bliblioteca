using Models.Entidades;

namespace DataAccess.Repositorio.IRepositorio
{
    public interface ILibroRepositorio: IRepositorio<Libro>
    {
        void Actualizar(Libro libro);
    }
}
