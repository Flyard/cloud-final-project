import React, { useEffect, useState } from "react";

export default function Card() {
  const [tasks, setTasks] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/todos/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => response.json())
      .then((data) => {
        setTasks(data);
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      {tasks.map((task) => (
        <>
          <div className="m-2">
            <div className="flex h-32 w-80 flex-col  overflow-scroll rounded-2xl bg-slate-50 pl-7 pt-5 drop-shadow-md">
              <p className=" text-xl font-extrabold">{task.name}</p>
              <p className="font-light">{task.content}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
