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
    public  class UsuarioRepositorio : Repositorio<Usuario>, IUsuarioRepositorio
    {
        private readonly ApplicationDbContext _db;

        public UsuarioRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(Usuario usuario)
        {
            var usuarioBD = _db.Usuarios.FirstOrDefault(b => b.Id == usuario.Id);
            if (usuarioBD != null)
            {
                usuarioBD.Id = usuario.Id;
                usuarioBD.Username= usuario.Username;
                
                _db.SaveChanges();
            }
        }
    }
}
