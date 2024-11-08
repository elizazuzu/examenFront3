import PropTypes from 'prop-types'; 
const Card = ({ data }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginTop: "20px",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>Información del Personaje</h3>
      <p><strong>Nombre:</strong> {data.nombre}</p>
      <p><strong>Película:</strong> {data.pelicula}</p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    nombre: PropTypes.string.isRequired,   
    pelicula: PropTypes.string.isRequired, 
  }).isRequired,
};

export default Card;
