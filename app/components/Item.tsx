import { Link } from "@remix-run/react";
import { getDateFormat } from "~/routes/jobs/$id";

export default function Item({ job }: any) {
  const { uji, status, created, general, image } = job;
  const { client_name } = general;

  return (
    <div className="items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
      <Link to={`/jobs/${uji}`} style={{ maxWidth: "50%" }}>
        <img
          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
          src={image}
          alt={client_name}
        />
      </Link>
      <div className="p-5">
        <small>ID: {uji}</small>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Link to={`/jobs/${uji}`}>Client: {client_name}</Link>
        </h3>
        <p className="text-gray-500 dark:text-gray-400">Status: {status}</p>
        <p className="text-gray-500 dark:text-gray-400">
          Email: {general.email}
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Phone: {general.mobile}
        </p>
        <p className="mb-7 text-gray-500 dark:text-gray-400">
          Created: {getDateFormat(created)}
        </p>

        <Link
          to={`/jobs/${uji}`}
          className="inline-flex items-center rounded-lg bg-green-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add/edit notes
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
