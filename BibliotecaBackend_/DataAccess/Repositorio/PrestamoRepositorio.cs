using DataAcces.Repositorio.IRepositorio;
using DataAccess;
using Models.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcces.Repositorio
{
    public  class PrestamoRepositorio : Repositorio<Prestamo>, IPrestamoRepositorio
    {
        private readonly ApplicationDbContext _db;

        public PrestamoRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(Prestamo prestamo)
        {
            var prestamoBD = _db.Prestamos.FirstOrDefault(b => b.Id == prestamo.Id);
            if (prestamoBD != null)
            {
                prestamoBD.Id = prestamo.Id;
                prestamoBD.MiembroId= prestamo.MiembroId;
                prestamoBD.LibroId = prestamo.LibroId;
                prestamoBD.FechaPrestamo= prestamo.FechaPrestamo;
                prestamoBD.FechaDevolucion= prestamo.FechaDevolucion;
                _db.SaveChanges();
            }
        }
    }
}
