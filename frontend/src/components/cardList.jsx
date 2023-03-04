import React from "react";
import Card from "./card.jsx";
import AddCard from "./addCard";

export default function CardList() {
  return (
    <>
      <div className="flex h-screen flex-col items-center pt-20 ">
        <h1 className="mb-16 text-center text-6xl font-bold">TO-DO ! </h1>
        <Card></Card>
        <AddCard></AddCard>
      </div>
    </>
  );
}
