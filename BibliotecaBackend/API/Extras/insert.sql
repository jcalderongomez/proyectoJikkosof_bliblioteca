-- Insertar datos en la tabla Biblioteca
INSERT INTO Biblioteca (Id, Nombre, Ubicacion) VALUES (1, 'Biblioteca Central', 'Av. Siempre Viva 123');
INSERT INTO Biblioteca (Id, Nombre, Ubicacion) VALUES (2, 'Biblioteca de Historia', 'Calle 12 #34-56');

-- Insertar datos en la tabla Libro
INSERT INTO Libro (Id, Titulo, Autor, ISBN, Disponible, BibliotecaID) 
VALUES (1, 'Cien Años de Soledad', 'Gabriel García Márquez', '9780307474728', 1, 1);
INSERT INTO Libro (Id, Titulo, Autor, ISBN, Disponible, BibliotecaID) 
VALUES (2, 'Don Quijote de la Mancha', 'Miguel de Cervantes', '9780060934347', 1, 2);

-- Insertar datos en la tabla Miembro
INSERT INTO Miembro (Id, Nombre) VALUES (1, 'Juan Pérez');
INSERT INTO Miembro (Id, Nombre) VALUES (2, 'María Gómez');

-- Insertar datos en la tabla Prestamo
INSERT INTO Prestamo (Id, MiembroID, LibroID, FechaPrestamo, FechaDevolucion) 
VALUES (1, 1, 1, '2024-09-25', NULL); -- Juan Pérez prestó "Cien Años de Soledad"
INSERT INTO Prestamo (Id, MiembroID, LibroID, FechaPrestamo, FechaDevolucion) 
VALUES (2, 2, 2, '2024-09-26', '2024-09-30'); -- María Gómez prestó y devolvió "Don Quijote de la Mancha"
