import React from "react";
import { Link } from "react-router-dom";

function VendorsList({ setOnHoverTab }) {
  return (
    <div className={`pt-10 pb-20`}>
      <div className="max-w-[1200px] relative mx-auto xl:px-3">
        <span className="text-[18px] font-bold text-[#B62C46]">Вендоры</span>{" "}
        <button
          className="absolute right-0 w-[12%] font-semibold rounded-[10px] border-[1px] border-[#444] text-[#B62C46]"
          onClick={() => setOnHoverTab("0")}
        >
          Go Back
        </button>
        <div className="w-full h-[2px] bg-gray-400 my-5"></div>
        <div className="w-full flex justify-between items-start gap-4 md:grid md:grid-cols-3 sm:grid sm:grid-cols-2">
          <div className="grid grid-cols-1 gap-4 rounded-[20px] w-full gap-y-2 text-[14px]">
            <Link to="/">Импортозамещение ПО</Link>
            <Link to="/">Astra Linux</Link>
            <Link to="/">Крипто-ПРО</Link>
            <Link to="/">Базальт СПО</Link>
            <Link to="/">Communigate Systems</Link>
            <Link to="/">nanoCAD</Link>
            <Link to="/">PostgresPro</Link>
            <Link to="/">Softline</Link>
            <Link to="/">Академия АйТи</Link>
          </div>

          <div className="grid grid-cols-1 gap-4 rounded-[20px] w-full gap-y-2 text-[14px]">
            <Link to="/">Киберпротект</Link>
            <Link to="/">Код безопасности</Link>
            <Link to="/">Лаборатория Касперского</Link>
            <Link to="/">МойОфис</Link>
            <Link to="/">Р7-офис</Link>
            <Link to="/">РЕД СОФТ</Link>
            <Link to="/">Росплатформа</Link>
            <Link to="/">IBS</Link>
            <Link to="/">IVA Technologies</Link>
          </div>

          <div className="grid grid-cols-1 gap-4 rounded-[20px] w-full gap-y-2 text-[14px]">
            <Link to="/"> ЭЛВИС-НеоТек</Link>
            <Link to="/">Горизонт-ВС</Link>
            <Link to="/">ROBIN RPA</Link>
            <Link to="/">GAGAR{">"}N</Link>
            <Link to="/">ДАКОМ М</Link>
            <Link to="/">СОВНЕТ</Link>
            <Link to="/">АСКОН</Link>
            <Link to="/">HTML Academy</Link>
            <Link to="/">UserGate</Link>
          </div>

          <div className="grid grid-cols-1 gap-4 rounded-[20px] w-full gap-y-2 text-[14px]">
            <Link to="/">Электронные</Link>
            <Link to="/"> Образовательные Ресурсы</Link>
            <Link to="/">Релэкс</Link>
            <Link to="/">Serchinform</Link>
            <Link to="/">Orion soft</Link>
            <Link to="/">Eltex</Link>
            <Link to="/">PositiveTechnologies</Link>
            <Link to="/">Basis</Link>
            <Link to="/">HOSTVM</Link>
          </div>

          <div className="grid grid-cols-1 gap-4 rounded-[20px] w-full gap-y-2 text-[14px]">
            <Link to="/">IDECO</Link>
            <Link to="/">ALMI PARTNER</Link>
            <Link to="/">Check Point</Link>
            <Link to="/">GRAPHISOFT</Link>
            <Link to="/">SolidWorks</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorsList;
