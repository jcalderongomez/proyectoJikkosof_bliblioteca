using Models.Entidades;

namespace DataAcces.Repositorio.IRepositorio
{
    public interface IBibliotecaRepositorio : IRepositorio<Biblioteca>
    {
        void Actualizar(Biblioteca biblioteca);
    }
}
