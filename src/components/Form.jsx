import PropTypes from 'prop-types'; 

const Form = ({ handleSubmit, personaje, handleInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre del personaje:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={personaje.nombre}
          onChange={handleInputChange}
          placeholder="Ingresa el nombre del personaje"
        />
      </div>

      <div>
        <label htmlFor="pelicula">Película:</label>
        <input
          type="text"
          id="pelicula"
          name="pelicula"
          value={personaje.pelicula}
          onChange={handleInputChange}
          placeholder="Ingresa el nombre de la película"
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

// Validación de props
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired, 
  personaje: PropTypes.shape({
    nombre: PropTypes.string.isRequired,   
    pelicula: PropTypes.string.isRequired, 
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired, 
};

export default Form;
