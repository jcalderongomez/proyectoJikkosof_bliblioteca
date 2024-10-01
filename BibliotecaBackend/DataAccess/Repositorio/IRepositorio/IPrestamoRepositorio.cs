using Models.Entidades;

namespace DataAccess.Repositorio.IRepositorio
{
    public interface IPrestamoRepositorio : IRepositorio<Prestamo>
    {
        void Actualizar(Prestamo prestamo);
    }
}
