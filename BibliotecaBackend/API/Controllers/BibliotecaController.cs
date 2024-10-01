using DataAccess.Repositorio.IRepositorio;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.Dto;
using Models.Entidades;


namespace APIBiblioteca.Controllers
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
            var blioteca = await _unidadTrabajo.Biblioteca.Obtener(id);
            _response.Resultado = blioteca;
            _response.Mensaje = "   Biblioteca" + blioteca.Id;
            return Ok(_response);   
        }

        [HttpPost]
        public async Task<ActionResult<Biblioteca>> PostBiblioteca([FromBody] Biblioteca biblioteca)
        {
            await _unidadTrabajo.Biblioteca.Agregar(biblioteca);
            await _unidadTrabajo.Guardar();
            return CreatedAtRoute("GetBiblioteca", new { id = biblioteca.Id }, biblioteca); // Status Code = 201
        }

        //[HttpPut("{id}")]
        //public async Task<ActionResult> PutBiblioteca(int id, [FromBody] Biblioteca blioteca)
        //{
        //    if (id != blioteca.Id)
        //    {
        //        return BadRequest("Id de Biblioteca no coincide");
        //    }
        //    _unidadTrabajo.Biblioteca.Actualizar(biblioteca);
        //    await _unidadTrabajo.Guardar(); return Ok(_response);
        //}

        //[HttpDelete("{id}")]
        //public async Task<ActionResult> DeleteBiblioteca(int id)
        //{
        //    var blioteca = await _db.Bibliotecas.FindAsync(id);
        //    if (blioteca == null)
        //    {
        //        return NotFound();
        //    }
        //    _db.Bibliotecas.Remove(blioteca);
        //    await _db.SaveChangesAsync();
        //    return NoContent();
        //}
    }
}
