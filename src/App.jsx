import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const [personaje, setPersonaje] = useState({
    nombre: "",
    pelicula: "",
  });

  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonaje({
      ...personaje,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(""); // Limpiar errores previos

    // Validaciones

    // Validación para el nombre
    if (personaje.nombre.trim() === "" || personaje.nombre.length < 3 || personaje.nombre.startsWith(" ")) {
      setError("El nombre debe tener al menos 3 caracteres y no debe comenzar con espacios.");
      return;
    }

    // Validación para la película
    if (personaje.pelicula.trim() === "" || personaje.pelicula.length < 6) {
      setError("La película debe tener al menos 6 caracteres.");
      return;
    }

    // Si todo está bien, marcamos como enviado
    setEnviado(true);
  };

  return (
    <main>
      <div>
        <h2>Formulario de Personajes de Películas</h2>

        {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar error si es necesario */}

        {/* Pasamos las props necesarias a Form */}
        <Form
          handleSubmit={handleSubmit}
          personaje={personaje}
          handleInputChange={handleInputChange}
        />

        {/* Mostrar Card solo si el formulario fue enviado correctamente */}
        {enviado && <Card data={personaje} />}
      </div>
    </main>
  );
}

export default App;
