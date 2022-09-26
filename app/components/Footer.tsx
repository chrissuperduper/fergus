import { Link } from "@remix-run/react";

const Footer = () => (
  <footer className="bg-white bg-gradient-to-r from-cyan-500 to-blue-500 p-4 shadow dark:bg-gray-900 md:px-6 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <Link to="/" className="mb-4 flex items-center sm:mb-0">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Tradie Jobs™
        </span>
      </Link>
      <ul className="mb-6 flex flex-wrap items-center text-sm text-white dark:text-gray-400 sm:mb-0">
        <li>
          <button type="button" className="mr-4 hover:underline md:mr-6 ">
            About
          </button>
        </li>
        <li>
          <button type="button" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </button>
        </li>
        <li>
          <button type="button" className="mr-4 hover:underline md:mr-6 ">
            Licensing
          </button>
        </li>
        <li>
          <button type="button" className="hover:underline">
            Contact
          </button>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
    <span className="block text-sm font-light text-white dark:text-gray-400 sm:text-center">
      &copy; 2022{" "}
      <a href="https://flowbite.com/" className="hover:underline">
        Tradie Jobs™
      </a>
      . All Rights Reserved.
    </span>
  </footer>
);
export default Footer;
