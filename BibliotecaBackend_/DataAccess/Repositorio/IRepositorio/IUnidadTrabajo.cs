namespace DataAcces.Repositorio.IRepositorio
{
    public interface IUnidadTrabajo : IDisposable
    {

        IMiembroRepositorio Miembro { get; }
        IBibliotecaRepositorio Biblioteca { get; }

        IPrestamoRepositorio Prestamo { get; }
        ILibroRepositorio Libro { get; }
        IUsuarioRepositorio Usuario { get; }

        Task Guardar();
    }
}
