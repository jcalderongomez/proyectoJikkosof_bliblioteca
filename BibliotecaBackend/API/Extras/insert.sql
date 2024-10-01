-- Insertar datos en la tabla Biblioteca
INSERT INTO Biblioteca (Id, Nombre, Ubicacion) VALUES (1, 'Biblioteca Central', 'Av. Siempre Viva 123');
INSERT INTO Biblioteca (Id, Nombre, Ubicacion) VALUES (2, 'Biblioteca de Historia', 'Calle 12 #34-56');

-- Insertar datos en la tabla Libro
INSERT INTO Libro (Id, Titulo, Autor, ISBN, Disponible, BibliotecaID) 
VALUES (1, 'Cien A�os de Soledad', 'Gabriel Garc�a M�rquez', '9780307474728', 1, 1);
INSERT INTO Libro (Id, Titulo, Autor, ISBN, Disponible, BibliotecaID) 
VALUES (2, 'Don Quijote de la Mancha', 'Miguel de Cervantes', '9780060934347', 1, 2);

-- Insertar datos en la tabla Miembro
INSERT INTO Miembro (Id, Nombre) VALUES (1, 'Juan P�rez');
INSERT INTO Miembro (Id, Nombre) VALUES (2, 'Mar�a G�mez');

-- Insertar datos en la tabla Prestamo
INSERT INTO Prestamo (Id, MiembroID, LibroID, FechaPrestamo, FechaDevolucion) 
VALUES (1, 1, 1, '2024-09-25', NULL); -- Juan P�rez prest� "Cien A�os de Soledad"
INSERT INTO Prestamo (Id, MiembroID, LibroID, FechaPrestamo, FechaDevolucion) 
VALUES (2, 2, 2, '2024-09-26', '2024-09-30'); -- Mar�a G�mez prest� y devolvi� "Don Quijote de la Mancha"
