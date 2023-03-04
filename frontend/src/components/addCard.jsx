import React from "react";
import {PlusCircleIcon} from "@heroicons/react/24/outline";


export default function AddCard(){
    return(
        <>
            <div className="m-2">
                <div className="w-80 h-32 border-dashed border-black border-2 rounded-2xl flex flex-col justify-between">
                    <div className="m-auto pt-3">
                    <PlusCircleIcon className="w-8 h-8 ml-4"/>
                    <p className=""> Add Task</p>
                    </div>
                </div>
            </div>
        </>

    )
}