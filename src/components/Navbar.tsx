import { useState } from "react";
import Logo from "../components/Logo";
import { SearchBar } from "../components";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-gray-950 p-4 flex justify-between items-center flex-wrap">
      {/* contenedor logo */}
      <div className="text-white text-2xl font-bold">
        <Logo />
      </div>
      {/* boton menu hamburguesa */}
      <button className="sm:hidden text-white" onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      <div className="w-80">
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex sm:flex-row space-x-4 lg:space-x-8 text-center lg:text-left`}
        >
          <li>
            <a href="#" className="block text-white hover:text-gray-300 py-2">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block text-white hover:text-gray-300 py-2">
              Crea tu Libro
            </a>
          </li>
          <li>
            <a href="#" className="block text-white hover:text-gray-300 py-2">
              Favoritos
            </a>
          </li>
        </ul>
      </div>
      {/* contenedor searchBar */}
      <div className="text-white text-2xl font-bold ">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
