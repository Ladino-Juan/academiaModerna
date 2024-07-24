import PropTypes from "prop-types";
import licenciaData from "../data/licenciaInfo.json";
import Formulario from "../components/Formulario";

const Licencia = (props) => {
  const { clase } = props;

  // Use an object to map classes instead of a switch
  const claseLicencia = licenciaData[clase] || {};

  return (
    <>
      <div className="w-full h-screen font-poppins text-blanco flex flex-col justify-center items-center relative text-center">
        <h1 className="font-semibold text-6xl max-sm:text-4xl mb-5">
          {claseLicencia.titulo}
        </h1>
        <p className="font-medium text-2xl max-sm:text-lg">
          {claseLicencia.descripcion}
        </p>
        <img
          src={claseLicencia.imagen}
          className="object-cover max-sm:object-none w-full h-screen -z-10 absolute opacity-40"
          alt="academia moderna de automovilismo cuba"
        />
      </div>
      <div className="w-full h-[60vh] max-sm:h-[80vh] bg-blanco font-poppins text-gray-700 flex justify-around items-center max-sm:flex-col text-center">
        <div className="w-1/4 max-sm:w-[80vw]">
          <h1 className="font-semibold text-2xl max-sm:text-xl mb-5">
            DURACIÓN
          </h1>
          <ul className="font-medium text-xl max-sm:text-lg">
            {claseLicencia.duracion &&
              claseLicencia.duracion.map((elemento, idx) => (
                <li key={idx}>- {elemento}</li>
              ))}
          </ul>
        </div>
        <div className="w-1/4 max-sm:w-[80vw]">
          <h1 className="font-semibold text-2xl max-sm:text-xl mb-5">
            ¿QUÉ INCLUYE?
          </h1>
          <ul className="font-medium text-xl max-sm:text-lg">
            {claseLicencia.contenido &&
              claseLicencia.contenido.map((elemento, idx) => (
                <li key={idx}>- {elemento}</li>
              ))}
          </ul>
        </div>
        <div className="w-1/4 max-sm:w-[80vw]">
          <h1 className="font-semibold text-2xl max-sm:text-xl mb-5">
            HORARIOS
          </h1>
          <p className="font-medium text-xl max-sm:text-lg">
            {claseLicencia.horario}
          </p>
        </div>
      </div>
      <div className="bg-blanco w-full h-[10vh] max-sm:h-[20vh] font-poppins flex justify-around items-center max-sm:flex-col">
        <div
          className="flex items-center justify-center w-56 text-xl max-sm:text-lg font-semibold bg-rojo text-blanco border-transparent rounded-xl"
          aria-label="formulario academia moderna de automovilismo cuba"
        >
          <span className="py-2">PRECIO ESPECIAL</span>
        </div>
        <div className="w-2/4 text-gray-600 text-left max-sm:w-[80vw] max-sm:text-center">
          <h1 className="font-semibold text-2xl max-sm:text-xl mb-2 mt-5">
            REQUISITOS
          </h1>
          <p className="font-medium text-xl max-sm:text-lg">
            no tener deudas con el tránsito, estar inscrito en el runt y tener
            16 años cumplidos
          </p>
        </div>
      </div>
      <Formulario />
    </>
  );
};

Licencia.propTypes = {
  clase: PropTypes.string.isRequired,
};

export default Licencia;
