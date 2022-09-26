import { useState } from "react";

function addNote(
  uji: string,
  list: any,
  title: string,
  description: string
): void {
  list.map((l: any) => {
    if (l.uji === uji) {
      l.notes.push({ title, description });
    }
    return l;
  });
  return list;
}

function editNote(
  uji: string,
  list: any,
  note_id: number,
  title: string,
  description: string
): void {
  list.map((l: any) => {
    if (l.uji === uji) {
      l.notes[note_id].title = title;
      l.notes[note_id].description = description;
    }
    return l;
  });
  return list;
}

export default function Modal({ index, list, setList, note, id, uji }: any) {
  const [showModal, setModal] = useState(false);
  const [noteTitle, setNoteTitle] = useState(note ? note.title : "");
  const [description, setDescription] = useState(note ? note.description : "");

  return (
    <>
      <button
        className={`block rounded-md ${
          index === 0
            ? "dark:hover:bg-blue-70 bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:focus:ring-blue-800"
            : "dark:hover:bg-green-70 bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:focus:ring-green-800"
        }  font-small mt-3 px-5 py-2.5 text-center text-sm text-white focus:outline-none focus:ring-4`}
        type="button"
        onClick={() => {
          setModal(!showModal);
        }}
      >
        {index === 0 ? "Add" : "Edit"} note
      </button>

      {showModal && (
        <div
          id={`modal-${index}`}
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 h-modal w-full overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
          style={{
            background: "rgba(0,0,0,.4",
          }}
        >
          <div
            className="relative h-full w-full max-w-2xl p-4 md:h-auto"
            style={{
              left: "50%",
              top: "50%",
              transform: "translateX(-50%) translateY(-50%)",
            }}
          >
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add note
                </h3>
                <button
                  type="button"
                  className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="space-y-6 p-6">
                <form>
                  <div className="mb-6 grid gap-6">
                    <div>
                      <label
                        htmlFor={`title-${index}`}
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Title
                      </label>

                      <input
                        type="text"
                        id={`title-${index}`}
                        className="focus:bordzer-blue-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Note title"
                        required
                        defaultValue={index === 0 ? "" : noteTitle}
                        onChange={(e) => {
                          setNoteTitle(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`message-${index}`}
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Description
                      </label>

                      <textarea
                        id={`message-${index}`}
                        rows={4}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Your message..."
                        defaultValue={index === 0 ? "" : description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
                <button
                  onClick={() => {
                    if (index === 0) {
                      setList(addNote(uji, list, noteTitle, description));
                    } else {
                      setList(editNote(uji, list, id, noteTitle, description));
                    }

                    setList([...list]);

                    setModal(false);
                  }}
                  type="button"
                  className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save
                </button>

                <button
                  type="button"
                  className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
