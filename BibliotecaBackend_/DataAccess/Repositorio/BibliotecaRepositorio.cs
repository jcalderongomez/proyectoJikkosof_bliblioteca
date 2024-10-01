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
    public class BibliotecaRepositorio : Repositorio<Biblioteca>, IBibliotecaRepositorio
    {
        private readonly ApplicationDbContext _db;

        public BibliotecaRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(Biblioteca biblioteca)
        {
            var bibliotecaBD = _db.Bibliotecas.FirstOrDefault(b => b.Id == biblioteca.Id);
            if (bibliotecaBD != null)
            {
                bibliotecaBD.Id = biblioteca.Id;
                bibliotecaBD.Nombre = biblioteca.Nombre;
                bibliotecaBD.Ubicacion = biblioteca.Ubicacion;
                _db.SaveChanges();
            }
        }
    }
}
