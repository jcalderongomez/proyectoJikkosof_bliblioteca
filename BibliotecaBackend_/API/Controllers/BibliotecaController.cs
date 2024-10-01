using DataAcces.Repositorio.IRepositorio;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.Dto;
using Models.Entidades;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BibliotecaController : ControllerBase
    {
        private readonly IUnidadTrabajo _unidadTrabajo;
        private readonly ILogger<BibliotecaController> _logger;
        private ResponseDto _response;

        public BibliotecaController(IUnidadTrabajo unidadTrabajo, ILogger<BibliotecaController> logger)
        {
            _unidadTrabajo = unidadTrabajo;
            _logger = logger;
            _response = new ResponseDto();
        }

        [HttpGet] //api/blioteca
        public async Task<ActionResult<IEnumerable<Biblioteca>>> GetBibliotecas()
        {
            _logger.LogInformation("Listado de Bibliotecas");
            var lista = await _unidadTrabajo.Biblioteca.ObtenerTodos();
            _response.Resultado = lista;
            _response.Mensaje = "Listado Bibliotecas";
            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetBiblioteca")] //api/blioteca/1
        public async Task<ActionResult<Biblioteca>> GetBiblioteca(int id)
        {
            var biblioteca = await _unidadTrabajo.Biblioteca.Obtener(id);
            _response.Resultado = biblioteca;
            _response.Mensaje = "   Biblioteca" + biblioteca.Id;
            return Ok(_response);
        }
    }
}
