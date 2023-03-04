import React from "react";

export default function Card() {
  return (
    <>
      <div className="m-2">
        <div className="flex h-32 w-80 flex-col justify-between rounded-2xl bg-slate-50 pl-20 drop-shadow-md	">
          <p className="pt-10 text-xl font-extrabold">Things to go</p>
          <p className="mb-3">Delete</p>
        </div>
      </div>
    </>
  );
}
