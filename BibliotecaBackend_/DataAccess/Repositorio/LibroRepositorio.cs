using DataAcces.Repositorio.IRepositorio;
using DataAccess;
using Models.Entidades;


namespace DataAcces.Repositorio
{
    public class LibroRepositorio : Repositorio<Libro>, ILibroRepositorio
    {
        private readonly ApplicationDbContext _db;

        public LibroRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(Libro libro)
        {
            var libroBD = _db.Libros.FirstOrDefault(b => b.Id == libro.Id);
            if (libroBD != null)
            {
                libroBD.Id = libro.Id;
                libroBD.Titulo = libro.Titulo;
                libroBD.Autor = libro.Autor;
                libroBD.ISBN = libro.ISBN;
                libroBD.Disponible= libro.Disponible;
                _db.SaveChanges();
            }
        }
    }
}