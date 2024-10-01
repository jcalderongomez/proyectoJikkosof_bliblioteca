using Models.Entidades;

namespace DataAccess.Repositorio.IRepositorio
{
    public interface IBibliotecaRepositorio : IRepositorio<Biblioteca>
    {
        void Actualizar(Biblioteca biblioteca);
    }
}
