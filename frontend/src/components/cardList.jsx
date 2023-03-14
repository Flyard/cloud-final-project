import React, { useEffect, useState } from "react";
import Card from "./card.jsx";
import AddCard from "./addCard";

export default function CardList() {
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
      <div className="flex h-screen flex-col items-center pt-20">
        <h1 className=" mb-10 text-center text-6xl font-bold">TODO List</h1>
        <div className="snap-x">
          <div className=" h-custom overflow-scroll px-10  ">
            {tasks.map((task) => (
              <Card
                title={task.name}
                description={task.content}
                id={task._id}
              ></Card>
            ))}
          </div>
        </div>

        <AddCard></AddCard>
      </div>
    </>
  );
}
