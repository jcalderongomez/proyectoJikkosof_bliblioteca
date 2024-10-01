using DataAccess.Repositorio.IRepositorio;

namespace DataAccess.Repositorio
{
    public class UnidadTrabajo: IUnidadTrabajo
    {
        private readonly ApplicationDbContext _db;
       

        public IMiembroRepositorio Miembro { get; private set; }
        public IBibliotecaRepositorio Biblioteca { get; private set; }
        public ILibroRepositorio Libro { get; private set; }
        public IPrestamoRepositorio Prestamo { get; private set; }
       
        public UnidadTrabajo(ApplicationDbContext db)
        {
            _db = db;
            Miembro = new MiembroRepositorio(_db);
            Biblioteca = new BibliotecaRepositorio(_db);
            Libro = new LibroRepositorio(_db);
            Prestamo = new PrestamoRepositorio(_db);
        }

        public void Dispose()
        {
            _db.Dispose();
        }

        public async Task Guardar()
        {
            await _db.SaveChangesAsync();
        }
    }
}
