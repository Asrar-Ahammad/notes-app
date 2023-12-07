import React from "react";

const Background = () => {
  return (
    <>
    <div className="w-full h-screen fixed z-[2]">
      <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl">
        documents.
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tight font-semibold text-zinc-900">
        Docs.
      </h1>
      <span className="absolute bottom-[38.5vh] left-1/2 -translate-x-[50%] translate-y-[90%] text-lg leading-none tracking-tight font-semibold text-zinc-600">Drag cards to see animation.</span>
      </div>
    </>
  );
};

export default Background;
