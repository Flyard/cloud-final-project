import React from "react";
import Card from "./card.jsx";
import AddCard from "./addCard";

export default function CardList(){
    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen ">
                <Card></Card>
                <Card></Card>
                <AddCard></AddCard>
            </div>

        </>
    )
}