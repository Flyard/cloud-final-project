import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function Card({ title, description, id }) {
  const [tasks, setTasks] = useState([]);

  const deleteData = (id) => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/todos/${id}`, {
      method: "delete",
    })
      .then((response) => response.json())
      .then(() => {
        const updatedData = tasks.filter((task) => task._id !== id);
        setTasks(updatedData);
        console.log("The task has been deleted !");
      });
  };

  return (
    <>
      <div className="my-5">
        <div className="flex h-32 w-80 flex-col  overflow-scroll rounded-2xl bg-slate-50 px-7 py-5 drop-shadow-xl hover:drop-shadow-md">
          <div className="flex justify-between">
            <p className=" text-xl font-extrabold">{title}</p>
            <button
              className="opacity-10 transition-opacity duration-1000 ease-out hover:opacity-100"
              type={"button"}
              onClick={() => {
                deleteData(id);
                window.location.reload();
              }}
            >
              <TrashIcon className=" h-5 w-5 "></TrashIcon>
            </button>
          </div>
          <p className="font-light">{description}</p>
        </div>
      </div>
    </>
  );
}
