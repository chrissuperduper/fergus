import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";
import Item from "../components/Item";
import { getJobs } from "~/models/job.server";
import { Outlet } from "@remix-run/react";
import type { Jobs } from "~/models/job.server";

type LoaderData = {
  jobs: Awaited<ReturnType<typeof getJobs>>;
  id: any;
};

export const loader = async ({ params }: any) =>
  json<LoaderData>({ jobs: await getJobs(), id: params.id });

const filterList = (list: Jobs, term: string) =>
  list.filter((item: any) =>
    item.general.client_name
      .trim()
      .toLowerCase()
      .includes(term.trim().toLowerCase())
  );

const sortList = (
  list: any,
  sort: string = "status",
  direction: string = "ASC"
) =>
  list.sort((a: any, b: any) => {
    let fa = a.created;
    let fb = b.created;

    if (sort === "status") {
      fa = a.status.toLowerCase();
      fb = b.status.toLowerCase();
    }

    if (direction === "DSC") {
      if (fa < fb) {
        return 1;
      }
      if (fa > fb) {
        return -1;
      }
    } else {
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
    }
    return 0;
  });

const Index = () => {
  const { jobs } = useLoaderData();
  const [list, setList] = useState(jobs);

  useEffect(() => {
    const data = localStorage.getItem("list");
    if (data) {
      const list = JSON.parse(data);
      if (list) {
        setList(list);
      }
    }
  }, []);

  const handleKeyUp = (e: any) => {
    setList([...filterList(list, e.target.value)]);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 lg:py-8 lg:px-6 ">
        <Outlet />

        <div>
          <hr className="hr my-10" />

          <div className="flex">
            <div className="flex-1">
              <label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Filter
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  onKeyUp={handleKeyUp}
                  type="search"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Search for a client..."
                  required
                />
              </div>
            </div>

            <div className="ml-3 inline-flex rounded-md shadow-sm" role="group">
              <button
                onClick={() => setList([...sortList(jobs, "status", "ASC")])}
                type="button"
                className="rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
              >
                Sort by status: ASC
              </button>
              <button
                onClick={() => setList([...sortList(jobs, "status", "DSC")])}
                type="button"
                className="rounded-r-md border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
              >
                Sort by status: DESC
              </button>
            </div>

            <div className="ml-3 inline-flex rounded-md shadow-sm" role="group">
              <button
                onClick={() => setList([...sortList(jobs, "date", "ASC")])}
                type="button"
                className="rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
              >
                Sort by date: ASC
              </button>
              <button
                onClick={() => setList([...sortList(jobs, "date", "DSC")])}
                type="button"
                className="rounded-r-md border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
              >
                Sort by date: DESC
              </button>
            </div>
          </div>

          <hr className="hr my-10" />

          <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
            {list &&
              list.map((job: any, index: number) => (
                <Item key={index} job={job} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Index;
