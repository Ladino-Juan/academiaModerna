const Footer = () => {
  return (
    <div
      className="w-full bg-blanco font-poppins p-6"
      id="contacto"
    >
      <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto">
        <img
          className="w-32 mb-4"
          src="assets/logo.webp"
          alt="academia moderna de automovilismo cuba"
        />
        <h2 className="text-black text-sm sm:text-base leading-relaxed max-w-md mb-4">
          Tu mejor opción en Pereira, ubicada estratégicamente cerca del sector
          de Cuba. Ofrecemos cursos completos para obtener tu licencia de
          conducir a precios accesibles y promociones especiales en paquetes
          combinados. Aprende a manejar con facilidad y aprovecha nuestras
          ofertas exclusivas. ¡Estamos cerca de ti para ayudarte a comenzar tu
          camino al volante!
        </h2>
        <a
          href="https://api.whatsapp.com/send?l=es&phone=573113187351"
          aria-label="Whatsapp academia moderna de automovilismo cuba"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="icons/whatsapp-icon.svg"
            alt="Whatsapp academia moderna de automovilismo cuba"
            className="w-8"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
