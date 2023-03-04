import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";

export default function AddCard() {
  const [showModal, setShowModal] = useState([false]);
  const [formValues, setFormValues] = useState({ name: "", content: "" });

  const openModal = () => {
    setShowModal(true);
  };

  const resetForm = () => {
    setFormValues({ name: "", content: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    addToDo();
  };

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const addToDo = () => {
    fetch("http://localhost:3000/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formValues.name,
        content: formValues.content,
      }),
    }).then(async (response) => {
      if (response.ok) {
        console.log("New task added!");
      } else {
        console.error("Failed to add new task");
      }
    });
  };

  return (
    <>
      <button className="m-2" type={"button"} onClick={openModal}>
        <div className="flex h-32 w-80 flex-col justify-between rounded-2xl border-2 border-dashed border-slate-400">
          <div className="m-auto pt-3">
            <PlusCircleIcon className="ml-4 h-8 w-8 stroke-slate-400" />
            <p className="text-slate-400"> Add Task</p>
          </div>
        </div>
      </button>
      {showModal ? (
        <>
          <div className="absolute grid w-11/12 grid-cols-3 ">
            <div className="col-start-3 max-w-md overflow-y-auto overflow-x-hidden bg-transparent drop-shadow-md">
              <div className="relative flex w-full flex-col rounded-lg bg-slate-50 ">
                <div className="flex rounded-t border-b border-solid border-slate-200 p-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                  >
                    <XCircleIcon className="color-red h-5 w-5"></XCircleIcon>
                  </button>
                </div>
                <div className="relative flex-auto p-6">
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="name"></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      placeholder="Task name"
                      className="w-full bg-transparent py-2 px-4 text-2xl  text-slate-700 placeholder-slate-300"
                    />

                    <div className="">
                      <label htmlFor="content"></label>
                      <div>
                        <textarea
                          id="content"
                          name="content"
                          value={formValues.content}
                          placeholder="Description"
                          onChange={handleChange}
                          className="w-full bg-transparent  py-2 px-4 text-slate-700 placeholder-slate-300"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="rounded py-2 px-4 font-bold text-slate-700 shadow-lg hover:shadow"
                        onClick={() => setShowModal(false)}
                      >
                        Add Task
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
