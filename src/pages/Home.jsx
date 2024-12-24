import { ArrowRightIcon } from "@heroicons/react/outline";
import Formulario from "../components/Formulario";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <div className="w-full min-h-screen font-poppins text-blanco flex flex-col justify-center items-center relative text-center px-4">
        <h1 className="font-semibold text-6xl max-sm:text-4xl">
          ¡APRENDE A CONDUCIR!
        </h1>
        <p className="font-medium text-2xl max-sm:text-lg mt-4">
          Estamos comprometidos en convertirte en un conductor seguro y
          competente.
        </p>
        <div className="w-full flex justify-center mt-6">
          <a
            href="#contacto"
            className="flex items-center justify-center w-56 text-xl max-sm:text-lg font-semibold bg-blanco hover:bg-rojo hover:text-blanco text-black border border-blanco hover:border-transparent rounded-xl transition-all duration-700"
            aria-label="formulario academia moderna de automovilismo cuba pereira"
          >
            <span className="py-2">INICIAR</span>
            <ArrowRightIcon className="w-6 ml-3" />
          </a>
        </div>
        <img
          src="assets/academia_bg.webp"
          className="object-cover w-full min-h-screen -z-10 absolute opacity-40"
          alt="academia moderna de automovilismo cuba pereira"
        />
      </div>

      {/* Courses Section */}
      <div
        className="bg-blanco py-10 w-full min-h-screen flex flex-wrap justify-around items-center font-poppins relative px-4"
        id="licencias"
      >
        <img
          className="grayscale absolute inset-0 opacity-10 max-w-[80vw] m-auto"
          src="assets/logo.webp"
          alt="academia moderna de automovilismo cuba pereira"
        ></img>
        <div className="w-full max-w-md text-center relative z-10">
          <h2 className="font-semibold text-3xl max-sm:text-2xl">
            NUESTROS CURSOS
          </h2>
          <p className="text-base mt-4">
            Más de 20 años ayudando a cientos de personas a obtener su licencia
            de conducir. 🚗 Ofrecemos preparación completa para tu examen médico
            y trámites relacionados, además de cursos especializados para
            licencia de conducir de moto y carro. Aprende a manejar con
            confianza en manos de expertos. ¡Empieza tu camino hoy mismo!
          </p>
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 w-full max-w-3xl relative z-10 mt-6">
          {[
            {
              title: "CATEGORIA A2",
              description: "Más de 125 c.c",
              iconSrc: "icons/moto.svg",
              clase: "licencia_a2",
            },
            {
              title: "CATEGORIA B1",
              description:
                "Automóviles, motocarros, cuatrimotos, camperos, camionetas y microbuses.",
              iconSrc: "icons/carro.svg",
              clase: "licencia_b1",
            },
            {
              title: "CATEGORIA C1",
              description:
                "Automóviles, motocarros, cuatrimotos, camperos, camionetas y microbuses de servicio público",
              iconSrc: "icons/carro.svg",
              clase: "licencia_c1",
            },
          ].map((course, index) => (
            <div
              key={index}
              onClick={() => navigate(`/${course.clase}`)}
              className="bg-rojo rounded-xl flex flex-col justify-center items-center cursor-pointer shadow-md group hover:bg-blanco group-hover:transition-all duration-300 p-4"
            >
              <h1 className="font-semibold text-2xl max-sm:text-xl group-hover:text-black">
                {course.title}
              </h1>
              <p className="group-hover:text-black text-center mt-2">
                {course.description}
              </p>
              <img
                className="w-16 mt-4"
                src={course.iconSrc}
                alt="academia moderna de automovilismo cuba pereira"
              />
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div
        className="w-full min-h-screen font-poppins text-blanco flex flex-col sm:flex-row justify-around items-center px-4 py-10"
        id="nosotros"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14583.406009776405!2d-75.74110721715554!3d4.799405978271518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e387df84fc5a017%3A0xc694304f6f421129!2sAcademia%20Moderna%20de%20Automovilismo!5e0!3m2!1sen!2sco!4v1697269084225!5m2!1sen!2sco"
          className="w-full max-w-md h-56 rounded-xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="w-full max-w-md text-center mt-8 sm:mt-0">
          <h2 className="font-semibold text-3xl max-sm:text-2xl">
            Licencia de Conducir en Pereira - Academia Moderna de Automovilismo
          </h2>
          <p className="text-base mt-4">
            Obtén tu licencia de conducir en la mejor ubicación de Pereira,
            cerca al sector de Cuba. Aprende a manejar con instructores
            confiables y métodos modernos.
          </p>
        </div>
        <img
          src="assets/fondo.png"
          className="object-cover max-sm:object-none w-full h-screen -z-10 absolute opacity-40"
          alt="academia moderna de automovilismo cuba pereira"
        />
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.link/47q3a1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Contacto"
        className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 bg-green-500 text-white rounded-full shadow-lg p-4 hover:bg-green-600 transition-all duration-300"
      >
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="absolute w-16 h-16 rounded-full bg-green-500 opacity-25 animate-ping"></span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 fill-current text-white"
          viewBox="0 0 24 24"
        >
       <path
            fillRule="evenodd"
            d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z"
          ></path>
        </svg>
      </a>
      <Formulario />
    </>
  );
};

export default Home;
