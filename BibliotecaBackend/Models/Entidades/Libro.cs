using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.Entidades
{
    public class Libro
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Titulo es Requerido")]
        [StringLength(60, MinimumLength = 1, ErrorMessage = "El Titulo debe ser Maximo 60 caracteres")]
        public string Titulo { get; set; }

        [Required(ErrorMessage = "Autor es Requerido")]
        [StringLength(60, MinimumLength = 1, ErrorMessage = "El Autor debe ser Maximo 60 caracteres")]
        public string Autor { get; set; }

        [Required(ErrorMessage = "ISBN es Requerido")]
        [StringLength(15, MinimumLength = 1, ErrorMessage = "ISBN debe ser Maximo 15 caracteres")]
        public string ISBN { get; set; }

            public int BibliotecaId { get; set;}

            [ForeignKey("BibliotecaId")]
        public Biblioteca Biblioteca { get; set; }

        [Required(ErrorMessage = "DISPONIBLE es requerido")]
        public bool Disponible { get; set; } = false;
    }
}
