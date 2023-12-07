import React, { useRef, useState } from "react";
import Card from "./Card";


const Foreground = () => {
  // const data = [
  // desc, filesize, closeOrDownload, tagDetails
  // ]
  const ref = useRef();
  const data = [
    {
      desc: `This is the real information of the card that is being displayed.`,
      fileSize: `.9mb`,
      close: true,
      tag: { isOpen: true, tagColor: "blue" },
    },
    {
      desc: `This is the real information of the card that is being displayed.`,
      fileSize: `1.9mb`,
      close: false,
      tag: { isOpen: false, tagColor: "green" },
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
        {data.map((item, index) =>(
          <Card data={item} reference = {ref}/>
        ))}
      </div>
    </>
  );
};

export default Foreground;
