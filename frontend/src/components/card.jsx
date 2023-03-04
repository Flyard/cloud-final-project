import React from "react";

export default function Card(){
    return(
        <>
            <div className="m-2">
                <div className="pl-20 w-80 h-32 bg-slate-50 rounded-2xl flex flex-col justify-between">
                    <p className="text-xl font-extrabold pt-10">
                        Things to go
                    </p>
                    <p className="mb-3">
                        Delete
                    </p>
                </div>
            </div>
        </>

    )
}