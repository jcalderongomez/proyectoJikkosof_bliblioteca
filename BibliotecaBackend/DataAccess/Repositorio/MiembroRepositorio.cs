using DataAccess.Repositorio.IRepositorio;
using Models.Entidades;

namespace DataAccess.Repositorio
{
    public class MiembroRepositorio : Repositorio<Miembro>, IMiembroRepositorio
    {
        private readonly ApplicationDbContext _db;

        public MiembroRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(Miembro miembro)
        {
            var miembroBD = _db.Miembros.FirstOrDefault(b => b.Id == miembro.Id);
            if (miembroBD != null)
            {
                miembroBD.Id = miembro.Id;
                miembroBD.Nombre = miembro.Nombre;
                miembroBD.Estado= miembro.Estado;
                _db.SaveChanges();
            }
        }
    }
}
