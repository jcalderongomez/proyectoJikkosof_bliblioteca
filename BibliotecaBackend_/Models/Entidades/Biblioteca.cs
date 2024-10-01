using System.ComponentModel.DataAnnotations;

namespace Models.Entidades
{
    public class Biblioteca
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Nombre es Requerido")]
        [StringLength(60, MinimumLength = 1, ErrorMessage = "Nombre debe ser Maximo 60 caracteres")]
        public string Nombre { get; set; }
        public string Ubicacion { get; set; }

    }
}
