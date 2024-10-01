using DataAcces.Repositorio.IRepositorio;
using Microsoft.AspNetCore.Mvc;
using Models.Dto;
using Models.Entidades;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibroController : ControllerBase
    {
        private readonly IUnidadTrabajo _unidadTrabajo;
        private readonly ILogger<LibroController> _logger;
        private ResponseDto _response;

        public LibroController(IUnidadTrabajo unidadTrabajo, ILogger<LibroController> logger)
        {
            _unidadTrabajo = unidadTrabajo;
            _logger = logger;
            _response = new ResponseDto();
        }

        [HttpGet] //api/blioteca
        public async Task<ActionResult<IEnumerable<Libro>>> GetLibros()
        {
            _logger.LogInformation("Listado de Libros");
            var lista = await _unidadTrabajo.Libro.ObtenerTodos(incluirPropiedades: "Biblioteca"); ;
            _response.Resultado = lista;
            _response.Mensaje = "Listado Libros";
            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetLibro")] //api/blioteca/1
        public async Task<ActionResult<Libro>> GetLibro(int id)
        {
            var libro = await _unidadTrabajo.Libro.Obtener(id);
            _response.Resultado = libro;
            _response.Mensaje = "   Libro" + libro.Id;
            return Ok(_response);
        }
    }
}
