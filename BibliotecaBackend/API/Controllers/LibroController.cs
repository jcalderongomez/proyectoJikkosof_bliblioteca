using DataAccess.Repositorio.IRepositorio;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.Dto;
using Models.Entidades;


namespace APILibro.Controllers
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
            var lista = await _unidadTrabajo.Libro.ObtenerTodos();
            _response.Resultado = lista;
            _response.Mensaje = "Listado Libros";
            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetLibro")] //api/blioteca/1
        public async Task<ActionResult<Libro>> GetLibro(int id)
        {
            var blioteca = await _unidadTrabajo.Libro.Obtener(id);
            _response.Resultado = blioteca;
            _response.Mensaje = "   Libro" + blioteca.Id;
            return Ok(_response);
        }

        [HttpPost]
        public async Task<ActionResult<Libro>> PostLibro([FromBody] Libro libro)
        {
            await _unidadTrabajo.Libro.Agregar(libro);
            await _unidadTrabajo.Guardar();
            return CreatedAtRoute("GetLibro", new { id = libro.Id }, libro); // Status Code = 201
        }

        //[HttpPut("{id}")]
        //public async Task<ActionResult> PutLibro(int id, [FromBody] Libro blioteca)
        //{
        //    if (id != blioteca.Id)
        //    {
        //        return BadRequest("Id de Libro no coincide");
        //    }
        //    _unidadTrabajo.Libro.Actualizar(libro);
        //    await _unidadTrabajo.Guardar(); return Ok(_response);
        //}

        //[HttpDelete("{id}")]
        //public async Task<ActionResult> DeleteLibro(int id)
        //{
        //    var blioteca = await _db.Libros.FindAsync(id);
        //    if (blioteca == null)
        //    {
        //        return NotFound();
        //    }
        //    _db.Libros.Remove(blioteca);
        //    await _db.SaveChangesAsync();
        //    return NoContent();
        //}
    }
}
