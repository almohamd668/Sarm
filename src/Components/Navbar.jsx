import { useState, useEffect, useRef } from "react";
import image from "../assets/TwightLogo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [Links] = useState(["", "About", "Products", "Contact"]);
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0 8px";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "18px 0  8px";
      }
    });
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      ref={headerRef}
      className="pt-[20px] fixed top-0 left-0 w-full z-50 transition-all duration-200"
    >
      <div
        className="container flex justify-between items-center
        mx-auto px-[30px] gap-[30px] sm:gap-0 "
      >
        <Link to="/">
          <img src={image} alt="logo" height={60} width={70} />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-[50px]">
            {Links.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLocaleLowerCase()}`}
                  className="text-white opacity-[0.9]
                   hover:opacity-[1] hover:underline transition-all duration-700"
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
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-all duration-300"
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
          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex flex-col gap-4 p-4 bg-white shadow-md rounded-md`}
          >
            {Links.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLocaleLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300"
                >
                  {link == "" ? "Home" : link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
