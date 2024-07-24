import { ArrowRightIcon } from "@heroicons/react/outline";
import Formulario from "../components/Formulario";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-screen font-poppins text-blanco flex flex-col justify-center items-center relative text-center">
        <h1 className="font-semibold text-6xl max-sm:text-4xl">
          ¡APRENDE A CONDUCIR!
        </h1>
        <br></br>
        <p className="font-medium text-2xl max-sm:text-lg">
          Estamos comprometidos en convertirte en un conductor seguro y
          competente.
        </p>
        <div className="w-full flex justify-center mt-9">
          <a
            href="#contacto"
            className="flex items-center justify-center w-56 text-xl max-sm:text-lg font-semibold bg-blanco hover:bg-rojo hover:text-blanco text-black border border-blanco hover:border-transparent rounded-xl transition-all duration-700"
            aria-label="formulario academia moderna de automovilismo cuba"
          >
            <span className="py-2">INICIAR</span>
            <ArrowRightIcon className="w-6 ml-3" />
          </a>
        </div>
        <img
          src="assets/academia_bg.webp"
          className="object-cover w-full h-screen -z-10 absolute opacity-40"
          alt="academia moderna de automovilismo cuba"
        />
      </div>
      <div
        className="bg-blanco py-20 w-full h-screen flex justify-around items-center font-poppins relative max-sm:flex-col"
        id="licencias"
      >
        <img
          className="grayscale absolute inset-0 opacity-10 max-w-[80vw] m-auto"
          src="assets/logo.webp"
          alt="academia moderna de automovilismo cuba"
        ></img>
        <div className="w-1/3 max-sm:w-[80vw] max-sm:text-center relative z-10">
          <h2 className="font-semibold text-6xl max-sm:text-4xl">
            NUESTROS CURSOS
          </h2>
          <br></br>
          <p className="font-medium text-2xl max-sm:text-lg">
            Somos una academia con más de 20 años de experiencia enseñando a
            conducir. Hemos ayudado a cientos de personas como tú a adquirir
            habilidades de conducción con la máxima seguridad y rapidez. ¡Ven y
            disfruta de las mejores clases con nosotros!
          </p>
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 h-3/4 w-2/4 text-blanco max-sm:w-[80vw] max-sm:h-3/4 relative z-10">
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
              className="bg-rojo rounded-xl flex flex-col justify-center items-center cursor-pointer shadow-md group hover:bg-blanco group-hover:transition-all duration-300"
            >
              <h1 className="font-semibold text-2xl max-sm:text-xl group-hover:text-black">
                {course.title}
              </h1>
              <p className="group-hover:text-black text-center">
                {course.description}
              </p>
              <img
                className="w-1/4"
                src={course.iconSrc}
                alt="academia moderna de automovilismo cuba"
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-full h-screen max-sm:h-[80vh] font-poppins text-blanco flex justify-around items-center max-sm:flex-col-reverse"
        id="nosotros"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14583.406009776405!2d-75.74110721715554!3d4.799405978271518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e387df84fc5a017%3A0xc694304f6f421129!2sAcademia%20Moderna%20de%20Automovilismo!5e0!3m2!1sen!2sco!4v1697269084225!5m2!1sen!2sco"
          className="w-1/3 h-2/4 rounded-xl max-sm:w-[80vw]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="w-1/3 text-right max-sm:w-[80vw] max-sm:text-center">
          <h2 className="font-semibold text-6xl max-sm:text-2xl">
            NUESTROS CURSOS
          </h2>
          <br></br>
          <p className="font-medium text-2xl max-sm:text-lg">
            Ofrecemos una experiencia de aprendizaje completa que te prepara
            para enfrentar cualquier desafío en la carretera.
          </p>
        </div>
        <img
          src="assets/fondo.png"
          className="object-cover max-sm:object-none w-full h-screen -z-10 absolute opacity-40"
          alt="academia moderna de automovilismo cuba"
        />
      </div>
      <Formulario />
    </>
  );
};

export default Home;
