import { Link } from "@remix-run/react";

const Header = () => (
  <header className="mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 pt-20 pb-12 text-center">
    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
      <Link to="/">Tradie Jobs™</Link>
    </h2>
    <p className="font-light text-white dark:text-gray-400 sm:text-xl lg:mb-8">
      Explore the whole collection of open tradie jobs <br />
      and opportunities in the greater Auckland area.
    </p>
  </header>
);

export default Header;
