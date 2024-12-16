import React from "react";
import { Link } from "react-router-dom";

function Exams({ setOnHoverTab }) {
  return (
    <div className={`pt-5 pb-20`}>
      <div className="max-w-[1200px] mx-auto relative xl:px-3">
        <span className="text-[18px] font-bold text-[#B62C46]">Экзамены</span>

        <button
          className="absolute right-0 w-[12%] lg:w-[18%] md:w-1/4 xl:right-3 font-semibold rounded-[10px] border-[1px] border-[#444] text-[#B62C46]"
          onClick={() => setOnHoverTab("0")}
        >
          Go Back
        </button>

        <div className="w-full h-[2px] bg-gray-400 my-5"></div>

        <div className="w-full flex justify-between items-start gap-4">
          <Link to="/">Astra Linux</Link>
          <Link to="/">Kaspersky Lab</Link>
          <Link to="/">IBS</Link>
          <Link to="/">СОВНЕТ</Link>
        </div>
      </div>
    </div>
  );
}

export default Exams;
