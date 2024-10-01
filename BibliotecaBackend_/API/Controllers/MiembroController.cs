using DataAcces.Repositorio.IRepositorio;
using Microsoft.AspNetCore.Mvc;
using Models.Dto;
using Models.Entidades;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MiembroController : ControllerBase
    {
        private readonly IUnidadTrabajo _unidadTrabajo;
        private readonly ILogger<MiembroController> _logger;
        private ResponseDto _response;

        public MiembroController(IUnidadTrabajo unidadTrabajo, ILogger<MiembroController> logger)
        {
            _unidadTrabajo = unidadTrabajo;
            _logger = logger;
            _response = new ResponseDto();
        }

        [HttpGet] //api/blioteca
        public async Task<ActionResult<IEnumerable<Miembro>>> GetMiembros()
        {
            _logger.LogInformation("Listado de Miembros");
            var lista = await _unidadTrabajo.Miembro.ObtenerTodos();
            _response.Resultado = lista;
            _response.Mensaje = "Listado Miembros";
            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetMiembro")] //api/blioteca/1
        public async Task<ActionResult<Miembro>> GetMiembro(int id)
        {
            var miembro = await _unidadTrabajo.Miembro.Obtener(id);
            _response.Resultado = miembro;
            _response.Mensaje = "   Miembro" + miembro.Id;
            return Ok(_response);
        }
    }
}
