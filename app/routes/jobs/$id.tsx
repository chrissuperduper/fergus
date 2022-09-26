import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";
import { getJobs } from "~/models/job.server";
import Modal from "../../components/Modal";

type LoaderData = {
  jobs: Awaited<ReturnType<typeof getJobs>>;
  id: any;
};

export const loader = async ({ params }: any) =>
  json<LoaderData>({ jobs: await getJobs(), id: params.id });

function updateStatus(list: any, status: string, uji: string): void {
  list.map((l: any) => {
    if (l.uji === uji) {
      l.status = status;
    }
    return l;
  });
  return list;
}

export function getDateFormat(created: string) {
  const d = new Date(created);
  const time = d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${time}`;
}

export default function JobId() {
  const { id } = useLoaderData();
  const { jobs } = useLoaderData();
  const [list, setList] = useState(jobs);

  const job = list.find((job: any) => id === job.uji);
  const { uji, status, created, general, notes, image } = job;
  const { client_name } = general;

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <div className="items-center bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <img
          className="d-block"
          src={image}
          alt={client_name}
          style={{ maxWidth: "600px", width: "100%" }}
        />
        <div className="p-5">
          <small>ID: {uji}</small>
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Client: {client_name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">Status:</p>
          <select
            name="status"
            defaultValue={status}
            onChange={(e: any) => {
              updateStatus(list, e.target.value, id);

              // Trigger state update
              setList([...list]);
            }}
          >
            <option value="scheduled">Scheduled</option>
            <option value="active">Active</option>
            <option value="invoicing">Invoicing</option>
            <option value="to priced">To priced</option>
            <option value="completed">Completed</option>
          </select>
          <p className="text-gray-500 dark:text-gray-400">
            Email: {general.email}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Phone: {general.mobile}
          </p>
          <p className="mb-7 text-gray-500 dark:text-gray-400">
            Created: {getDateFormat(created)}
          </p>

          <div className="flex">
            <h2 className="mr-7 text-2xl">Notes</h2>
            <Modal setList={setList} index={0} list={list} uji={id} />
          </div>

          <hr className="my-2" />

          {notes && (
            <dl className="max-w-md divide-y divide-gray-200 text-gray-900 dark:divide-gray-700 dark:text-white">
              {notes.map((item: any, index: number) => (
                <div key={index} className="pb-3">
                  <dt className="md:text-md mb-1 text-gray-500 dark:text-gray-400">
                    {item.title}
                  </dt>
                  <dd
                    className="text-md font-semibold"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <Modal
                    index={index + 1}
                    note={item}
                    id={index}
                    setList={setList}
                    list={list}
                    uji={id}
                  />
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </>
  );
}
