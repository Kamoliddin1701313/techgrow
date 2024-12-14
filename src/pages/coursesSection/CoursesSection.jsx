import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpcomingCourses from "./UpcomingCourses";
import NewCourses from "./NewCourses";
import DiscountedCourses from "./DiscountedCourses";
import ProfessionalDevelopmentCourses from "./ProfessionalDevelopmentCourses";

function CoursesSection() {
  const [tab, setTab] = useState(1);

  return (
    <div className="bg-[#f2f2f2] pb-4">
      <div className="max-w-[1200px] mx-auto xl:px-3">
        <div className="flex justify-between items-center gap-8 border-b-[1px] border-[#e2e1e1] h-[52px] lg:gap-3 md:gap-1">
          <button
            onClick={() => setTab(1)}
            className={`h-full uppercase text-[#a1a1a1] text-[18px] lg:text-[14px] md:text-[12px] md:lowercase ${
              tab == 1 &&
              "relative before:content-[''] before:absolute before:-bottom-[1px] before:h-[1px] before:bg-[#cb0f41] text-[#cb0f41] before:transition-all before:duration-200 before:transform before:w-full"
            }`}
          >
            Kelgusi kurslar
          </button>

          <button
            onClick={() => setTab(2)}
            className={`h-full uppercase text-[#a1a1a1] text-[18px] lg:text-[14px] md:text-[12px] md:lowercase ${
              tab == 2 &&
              "relative before:content-[''] before:absolute before:-bottom-[1px] before:h-[1px] before:bg-[#cb0f41] text-[#cb0f41] before:transition-all before:duration-200 before:transform before:w-full"
            }`}
          >
            Yangi kurslar
          </button>

          <button
            onClick={() => setTab(3)}
            className={`h-full uppercase text-[#a1a1a1] text-[18px] lg:text-[14px] md:text-[12px] md:lowercase ${
              tab == 3 &&
              "relative before:content-[''] before:absolute before:-bottom-[1px] before:h-[1px] before:bg-[#cb0f41] text-[#cb0f41] before:transition-all before:duration-200 before:transform before:w-full"
            }`}
          >
            Chegirmali kurslar
          </button>

          <button
            onClick={() => setTab(4)}
            className={`h-full uppercase text-[#a1a1a1] text-[18px] lg:text-[14px] md:text-[12px] md:lowercase ${
              tab == 4 &&
              "relative before:content-[''] before:absolute before:-bottom-[1px] before:h-[1px] before:bg-[#cb0f41] text-[#cb0f41] before:transition-all before:duration-200 before:transform before:w-full"
            }`}
          >
            Qayta tiklash kurslari
          </button>

          <button className="h-full uppercase text-[#a1a1a1] text-[18px] lg:text-[14px] md:text-[12px] md:lowercase">
            <Link to="/schedule">Barcha kurslar</Link>
          </button>
        </div>

        <div className="my-7">
          {tab == 1 && <UpcomingCourses />}
          {tab == 2 && <NewCourses />}
          {tab == 3 && <DiscountedCourses />}
          {tab == 4 && <ProfessionalDevelopmentCourses />}
        </div>
      </div>
    </div>
  );
}

export default CoursesSection;
