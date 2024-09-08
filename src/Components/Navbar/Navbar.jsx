import { useState, useEffect, useRef } from "react";
import image from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./navbar.css";
function Header() {
  const [Links] = useState([
    "",

    "Products",
    "Contact",
  ]);
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "12px 0  5px";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "12px 0  5px";
      }
    });
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // hd-li relative after:absolute after:bottom-0 after:left-0 hover:after:w-full
  // after:h-1.5 after:w-l after:w-2 after:bg-move cursor-pointer
  return (
    <header
      ref={headerRef}
      className="fixed pt-[8px] left-0 w-full z-50 transition-all duration-200"
    >
      <div
        className="container flex justify-between items-center
        mx-auto px-[30px] gap-[30px] sm:gap-0 "
      >
        <Link to="/">
          <img src={image} alt="logo" height={150} width={150} />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center  gap-[50px]">
            {Links.map((link) => (
              <li
                key={link}
                className=""
              >
                <Link
                  to={`/${link.toLocaleLowerCase()}`}
                  className="text-white opacity-[0.9]
                   hover:opacity-[1]  transition-all duration-700 btn3  py-1"
                >
                  {link == "" ? "Home" : link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/** mobile toggle */}
        <nav className="block md:hidden">
          <button
            className="flex items-center gap-2 p-2 rounded-md text-white  hover:bg-gray-100 transition-all relative z-50 duration-300"
            onClick={handleToggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">Toggle navigation</span>
          </button>
          <div className={`${menuOpen ? "flex" : "hidden"}`}>
            <ul
              className={` flex flex-col gap-4 p-4 bg-gradient-to-r from-primary to-darkSec   -z-10
                  shadow-md rounded-md justify-center items-center absolute w-[100vw] top-0 left-0 h-[100vh] `}
            >
              {Links.map((link) => (
                <li
                  key={link}
                  className="bg-black/20 backdrop-blur-lg w-full text-center border-b border-cyan
                    shadow-cyan py-2.5 text-lg font-medium text-white rounded-lg mt-1.5 hover:bg-gradient-to-r from-primary to-darkSec hover:backdrop-blur-lg "
                >
                  <Link
                    to={`/${link.toLocaleLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900 transition-all duration-300"
                  >
                    {link == "" ? "Home" : link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
