using Models.Entidades;

namespace DataAcces.Repositorio.IRepositorio
{
    public interface IMiembroRepositorio : IRepositorio<Miembro>
    {
        void Actualizar(Miembro miembro);
    }
}
