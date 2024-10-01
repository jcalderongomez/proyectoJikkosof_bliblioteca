using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Entidades
{
    public class Prestamo
    {
        [Key]
        public int Id { get; set; }
        public int MiembroId { get; set; }

        [ForeignKey("MiembroId")]

        public Miembro Miembro { get; set; }
        public int LibroId { get; set; }

        [ForeignKey("LibroId")]
        public Libro Libro { get; set; }
        public DateTime FechaPrestamo { get; set; }
        public DateTime? FechaDevolucion { get; set; }
    }
}
