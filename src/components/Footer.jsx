const Footer = () => {
  return (
    <div className="w-full h-[30vh] max-sm:h-[40vh] flex max-sm:flex-col items-center justify-around font-poppins bg-blanco" id="contacto">
      <div className="flex flex-col items-center justify-center">
        <img
        className="w-40"
          src="assets/logo.webp"
          alt="academia moderna de automovilismo cuba"
        ></img>
        <br></br>
        <h2 className="text-black">Academia moderna de automovilismo cuba, Pereira</h2>
      </div>
      <div>
        <a
          href="https://api.whatsapp.com/send?l=es&phone=573113187351"
          aria-label="Whatsapp academia moderna de automovilismo cuba"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2"
        >
          <img
            src="icons/whatsapp-icon.svg"
            alt="Whatsapp academia moderna de automovilismo cuba"
          ></img>
        </a>
       

        <a href="https://davidladino.netlify.app/"
          aria-label="David Ladino Portfolio"
          target="_blank"
          className="text-black text-center absolute mt-10"
          rel="noopener noreferrer">Developed by David Ladino</a>
      </div>
    </div>
  );
};

export default Footer;
