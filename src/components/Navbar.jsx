import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";
import { SearchContext } from "./SearchTermProvider";
import { BiSun, BiMoon } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [darkMode, setDarkMode] = useState(theme);
  const [expanded, setExpanded] = useState(false);

  const handleSearch = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode]);

  const { totalItems } = useCart();

  return (
    <div
      className={`${darkMode ? "bg-light-black" : "bg-light"}
       sticky h-20 py-4 px-2 sm:p-6 z-10 top-0 shadow-md`}
    >
      <div className="containerWrap flex justify-between items-center">
        <Link
          to="/"
          className={`${expanded ? "hidden sm:block" : ""} mr-auto`}
        >
          <h1
            className={`${
              darkMode ? "text-green-200" : "text-light-primary"
            } normal-case text-xl`}
          >
            Gadgets Dome
          </h1>
        </Link>
        <div className="flex ml-auto gap-2 sm:gap-4 items-center">
          <div
            className={`${theme ? "bg-black" : "bg-light"}
            ${expanded ? "mr-auto" : ""} flex items-center "w-64 rounded-md`}
          >
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Search…"
              className={`${
                theme
                  ? "bg-black text-dark-primary"
                  : "bg-light text-light-primary"
              } ${
                expanded ? "w-full" : "hidden"
              } px-2 py-[5px] border-y-[1px] border-l-[1px] border-[#666666] rounded-l-lg outline-0 transition-all duration-300`}
            />
            <button
              className={`
              ${
                darkMode
                  ? "bg-light-black text-green-200"
                  : "text-light-primary"
              } inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:text-accent-foreground h-9 w-9 relative `}
              onClick={handleSearch}
            >
              <RiSearchLine className="h-5 w-5" />
            </button>
          </div>
          <button
            className={`${
              darkMode ? "text-green-200" : "text-light-primary"
            } inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:text-accent-foreground h-9 w-9 relative
            `}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <BiSun className="h-5 w-5" />
            ) : (
              <BiMoon className="h-5 w-5" />
            )}
          </button>
          <Link
            to="/cart"
            className={`${darkMode ? "text-green-200" : "text-light-primary"}
            inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:text-accent-foreground h-9 w-9 relative
          `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span
              className={`${
                darkMode ? "bg-light-black" : "bg-light"
              } absolute top-[-12px] right-[-5px]`}
            >
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
