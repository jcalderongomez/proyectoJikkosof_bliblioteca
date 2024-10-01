using Models.Entidades;

namespace DataAccess.Repositorio.IRepositorio
{
    public interface IMiembroRepositorio : IRepositorio<Miembro>
    {
        void Actualizar(Miembro miembro);
    }
}
