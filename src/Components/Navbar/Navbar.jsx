import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#2c3e50] border-gray-200 dark:bg-gray-900 py-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <h1 className="text-2xl font-extrabold text-white">
              START FRAMEWORK
            </h1>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="about"
                  className=" focus:bg-[#1abc9c] md:p-2  block font-bold text-sm py-2 px-3 text-white rounded   md:border-0  "
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  className="focus:bg-[#1abc9c] md:p-2 block font-bold text-sm py-2 px-3 text-white rounded   md:border-0  "
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="focus:bg-[#1abc9c] md:p-2  block font-bold text-sm py-2 px-3 text-white rounded   md:border-0  "
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
