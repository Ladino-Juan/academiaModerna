import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };


  return (
    <div className="bg-blanco w-full h-[50px] fixed top-0 z-50">
      <div className="px-2 flex justify-around items-center w-full h-full text-xs">
        <a
          onClick={() => navigate("/")}
          href="/"
          aria-label="academia moderna de automovilismo cuba"
        >
          <img
            className="w-[50px]"
            src="assets/logo.webp"
            alt="academia moderna de automovilismo cuba logo"
          ></img>
        </a>

        <div className="hidden md:flex text-rojo font-poppins">
          <ul className="hidden md:flex">
            <li className="pr-4 relative group">
              <a
                onClick={() => navigate("/#licencias")}
                href="#licencias"
                className="hover:text-black transition-all duration-700 cursor-pointer"
                aria-label="licencias academia moderna de automovilismo cuba logo"
              >
                LICENCIAS
              </a>
            </li>
            <li className="pr-4 relative group">
              <a
                onClick={() => navigate("/#nosotros")}
                href="#nosotros"
                className="hover:text-black transition-all duration-700 cursor-pointer"
                aria-label="academia moderna de automovilismo cuba logo"
              >
                NOSOTROS
              </a>
            </li>
            <li className="pr-4 relative group">
              <a
                onClick={() => navigate("/#contacto")}
                href="#contacto"
                className="hover:text-black transition-all duration-700 cursor-pointer"
                aria-label="academia moderna de automovilismo cuba logo"
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden ml-16 text-black" onClick={toggleNav}>
          {!nav ? (
            <MenuIcon className="w-5" />
          ) : (
            <XIcon className="w-5 text-black" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-blanco text-black text-center w-full h-screen px-8 py-12 rounded-b-xl font-poppins"
        }
      >
        <li className="pr-4 relative group">
          <a
            onClick={() => {navigate("/#licencias"); closeNav();}}
            href="#licencias"
         className="hover:text-black transition-all duration-700 cursor-pointer"
            aria-label="licencias academia moderna de automovilismo cuba logo"
          >
            LICENCIAS
          </a>
        </li>
        <li className="pr-4 relative group">
          <a
            onClick={() => {navigate("/#nosotros"); closeNav();}}
            href="#nosotros"
            className="hover:text-black transition-all duration-700 cursor-pointer"
            aria-label="academia moderna de automovilismo cuba logo"
          >
            NOSOTROS
          </a>
        </li>
        <li className="pr-4 relative group">
          <a
           onClick={() => {navigate("/#contacto"); closeNav();}}
            href="#contacto"
            className="hover:text-black transition-all duration-700"
            aria-label="academia moderna de automovilismo cuba logo"
          >
            CONTACTO
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
