using System.ComponentModel.DataAnnotations;

namespace Models.Entidades
{
    public class Miembro
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Nombre es Requerido")]
        [StringLength(60, MinimumLength = 1, ErrorMessage = "Nombre debe ser Maximo 60 caracteres")]
        public string Nombre { get; set; }

        public List<Libro> LibrosPrestados { get; set; }

        [Required(ErrorMessage = "El ESTADO es requerido")]
        public bool Estado { get; set; } = true;
    }
}
