namespace DataAccess.Repositorio.IRepositorio
{
    public interface IUnidadTrabajo : IDisposable
    {

        IMiembroRepositorio Miembro { get; }
        IBibliotecaRepositorio Biblioteca { get; }

        IPrestamoRepositorio Prestamo { get; }
        ILibroRepositorio Libro { get; }
       
        Task Guardar();
    }
}
