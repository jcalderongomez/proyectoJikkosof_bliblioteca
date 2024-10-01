-- Crear tabla Biblioteca
CREATE TABLE Biblioteca (
    Id INT PRIMARY KEY,
    Nombre VARCHAR(100),
    Ubicacion VARCHAR(200)
);

-- Crear tabla Libro
CREATE TABLE Libro (
    Id INT PRIMARY KEY,
    Titulo VARCHAR(150),
    Autor VARCHAR(100),
    ISBN VARCHAR(20),
    Disponible BIT,
    BibliotecaID INT,
    FOREIGN KEY (BibliotecaID) REFERENCES Biblioteca(Id)
);

-- Crear tabla Miembro
CREATE TABLE Miembro (
    Id INT PRIMARY KEY,
    Nombre VARCHAR(100)
);

-- Crear tabla Prestamo
CREATE TABLE Prestamo (
    Id INT PRIMARY KEY,
    MiembroID INT,
    LibroID INT,
    FechaPrestamo DATE,
    FechaDevolucion DATE NULL,
    FOREIGN KEY (MiembroID) REFERENCES Miembro(Id),
    FOREIGN KEY (LibroID) REFERENCES Libro(Id)
);
