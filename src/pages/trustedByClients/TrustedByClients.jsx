import React from "react";
import { Link } from "react-router-dom";
import untitle1 from "../../assets/images/untitle1.jpg";
import untitle2 from "../../assets/images/untitle2.jpg";
import untitle3 from "../../assets/images/untitle3.jpg";
import untitle4 from "../../assets/images/untitle4.jpg";
import untitle5 from "../../assets/images/untitle5.jpg";
import untitle6 from "../../assets/images/untitle6.jpg";
import untitle7 from "../../assets/images/untitle7.jpg";
import untitle8 from "../../assets/images/untitle8.jpg";
import untitle9 from "../../assets/images/untitle9.jpg";
import untitle10 from "../../assets/images/untitle10.jpg";

function TrustedByClients() {
  return (
    <div className="max-w-[1280px] mx-auto xl:px-3">
      <h1 className="w-2/5 mx-auto text-[28px] text-[#444] text-center my-16 lg:w-3/5 lg:my-10 md:w-full md:text-[24px]">
        Ular bizga ishonishadi mijozlarimiz va hamkorlarimiz
      </h1>
      <div className="flex justify-between items-start mb-5 md:grid md:grid-cols-1">
        <div className="flex-1 grid grid-cols-3">
          <div className=" border-[1px] border-[#e5e5e5] w-full h-[120px]">
            <Link>
              <img
                src={untitle1}
                alt="untitle1"
                className="h-[118px] w-4/5 mx-auto"
              />
            </Link>
          </div>

          <div className=" border-[1px] border-[#e5e5e5] w-full h-[120px]">
            <Link>
              <img
                src={untitle2}
                alt="untitle1"
                className="h-[118px] w-4/5 mx-auto"
              />
            </Link>
          </div>

          <div className=" border-[1px] border-[#e5e5e5] w-full h-[120px]">
            <Link>
              <img
                src={untitle3}
                alt="untitle1"
                className="h-[118px] w-4/5 mx-auto"
              />
            </Link>
          </div>

          <div className=" border-[1px] border-[#e5e5e5] w-full h-[120px]">
            <Link>
              <img
                src={untitle4}
                alt="untitle1"
                className="h-[118px] w-4/5 mx-auto"
              />
            </Link>
          </div>

          <div className=" border-[1px] border-[#e5e5e5] w-full h-[120px]">
            <Link>
              <img
                src={untitle5}
                alt="untitle1"
                className="h-[118px] w-4/5 mx-auto"
              />
            </Link>
          </div>

          <div className=" border-[1px] border-[#e5e5e5] w-full h-[120px]">
            <Link>
              <img
                src={untitle6}
                alt="untitle1"
                className="h-[118px] w-4/5 mx-auto"
              />
            </Link>
          </div>

          <div className=" border-[1px] border-[#e5e5e5] w-full h-[120px]">
            <Link>
              <img
                src={untitle7}
                alt="untitle1"
                className="h-[118px] w-4/5 mx-auto"
              />
            </Link>
          </div>

          <div className=" border-[1px] border-[#e5e5e5] w-full h-[120px]">
            <Link>
              <img
                src={untitle8}
                alt="untitle1"
                className="h-[118px] w-4/5 mx-auto"
              />
            </Link>
          </div>

          <div className=" border-[1px] border-[#e5e5e5] w-full h-[120px]">
            <Link>
              <img
                src={untitle9}
                alt="untitle1"
                className="h-[118px] w-4/5 mx-auto"
              />
            </Link>
          </div>

          <div className=" border-[1px] border-[#e5e5e5] w-full h-[120px]">
            <Link>
              <img
                src={untitle10}
                alt="untitle1"
                className="h-[118px] w-4/5 mx-auto"
              />
            </Link>
          </div>

          <div className=" border-[1px] border-[#e5e5e5] w-full h-[120px]">
            <Link>
              <img
                src={untitle4}
                alt="untitle1"
                className="h-[118px] w-4/5 mx-auto"
              />
            </Link>
          </div>

          <div className=" border-[1px] border-[#e5e5e5] w-full h-[120px]">
            <Link>
              <img
                src={untitle1}
                alt="untitle1"
                className="h-[118px] w-4/5 mx-auto"
              />
            </Link>
          </div>
        </div>

        <div className="flex-1 p-10 border-[1px] border-[#e5e5e5] lg:p-5">
          <h1 className="text-[28px] mb-[10px] text-center lg:text-[22px]">
            Uzoq Sharq banki PJSC Sberbank
          </h1>
          <p className="text-[#444] text-[14px] leading-7">
            Rossiya Sberbank" ochiq aksiyadorlik jamiyati Softline o'quv
            markaziga kompaniya xodimlarini 2021 yil oktabr-dekabr oylarida
            o'tkazilgan professional o'qitish uchun minnatdorchilik bildiradi.
            Korxonaning 10 nafar xodimi treningdan o‘tdi. Oracle Database, Red
            Hat va PostgreSQL Administration sohalarida qoʻshimcha taʼlim
            dasturlarini oʻrganish bizga bajarilgan vazifalarning sifati va
            samaradorligini oshirish imkonini berdi.
          </p>
          <p className="text-[#444] text-[14px] mt-5 leading-7">
            "Sberbank" YoAJ Uzoq Sharq bankining iste'dodlarni rivojlantirish
            markazi direktori
          </p>
          <p className="text-[#444] text-[14px] mb-3 leading-7">A.V.Mazanova</p>

          <Link to="/" className="text-[#cb0f41] text-[14px] leading-7">
            Rahmat maktubini ko'ring
          </Link>

          <div className="w-full bg-[#e5e5e5] h-[1px] my-4"></div>
          <Link to="/" className="text-[#cb0f41] text-[14px] leading-7">
            Barcha sharhlarni o'qing
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrustedByClients;
