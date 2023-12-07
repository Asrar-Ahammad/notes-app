import React from "react";
import { FiFileText } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{ bounceStiffness: 200, bounceDamping: 8 }} className="relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-5 overflow-hidden">
        <FiFileText className="f text-[1.5rem]" />
        <p className="text-sm font-semibold mt-5 leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full   left-0">
          <div className="flex items-center justify-between px-5 py-3 mb-5">
            <h5>{data.fileSize}</h5>
            <div className="w-6 h-6 bg-zinc-600 flex items-center justify-center rounded-xl">
              {data.close ? (
                <IoClose />
              ) : (
                <MdOutlineFileDownload className="text-lg text-white" />
              )}
            </div>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } text-center`}
            >
              <h3 className="font-semibold text-sm">
                {data.tag.tagColor === "blue" ? "Upload" : "Download"}
              </h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
