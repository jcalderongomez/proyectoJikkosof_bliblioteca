﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Dto
{
    public class RegistroDto
    {
        [Required(ErrorMessage ="Usuario es Requerido")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password es Requerido")]
        [StringLength(10, MinimumLength =4, ErrorMessage ="El password debe ser minimo de 4, máximo de 10 caracteres")]
        public string Password { get; set; }
    }
}
