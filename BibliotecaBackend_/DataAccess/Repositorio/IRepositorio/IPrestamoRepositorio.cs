using Models.Entidades;

namespace DataAcces.Repositorio.IRepositorio
{
    public interface IPrestamoRepositorio : IRepositorio<Prestamo>
    {
        void Actualizar(Prestamo prestamo);
    }
}
