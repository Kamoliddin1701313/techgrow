import React from "react";
import { Link } from "react-router-dom";

function OurStory({ setOnHoverTab }) {
  return (
    <div className={`pt-5 pb-20`}>
      <div className="w-full flex justify-between relative items-start max-w-[1200px] mx-auto gap-4 xl:px-3 md:gap-2 md:grid md:grid-cols-2 md:gap-y-10">
        <div className="grid grid-cols-1 gap-4 rounded-[20px] w-full gap-y-2 text-[14px]">
          <Link to="/">Учебный центр Softline</Link>
          <Link to="/">Миссия и ценности</Link>
          <Link to="/">Условия обучения</Link>
          <Link to="/">Наши тренеры</Link>
          <Link to="/">Стать нашим тренером</Link>
          <Link to="/">Статьи УЦ Softline </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 rounded-[20px] w-full gap-y-2 text-[14px]">
          <Link to="/"> Сведения об образовательной организации </Link>
          <Link to="/">Наши лицензии</Link>
          <Link to="/">Наши статусы</Link>
          <Link to="/">Наши проекты</Link>
          <Link to="/">Наши партнеры</Link>
          <Link to="/">FAQ</Link>
        </div>

        <div className="grid grid-cols-1 gap-4 rounded-[20px] w-full gap-y-2 text-[14px]">
          <Link to="/">Реквизиты</Link>
          <Link to="/">Контакты</Link>
          <Link to="/">Аренда компьютерных классов</Link>
          <Link to="/">Отзывы </Link>
        </div>

        <button
          className="absolute -bottom-14 w-[12%] md:w-1/5 sm:w-1/3 xl:left-3 font-semibold rounded-[10px] border-[1px] border-[#444] left-0 text-red-600"
          onClick={() => setOnHoverTab("0")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default OurStory;
