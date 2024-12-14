import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import distanceIcon from "../../assets/images/distanceIcon.png";
import space from "../../assets/images/space.png";
import akademiya from "../../assets/images/akademiya.png";
import { Link } from "react-router-dom";

function DiscountedCourses() {
  const [checkedIds, setCheckedIds] = useState([]);

  const upcomingData = [
    {
      id: 1,
      img: space,
      title: "SpaceVM virtualizatsiya tizimini boshqarish asoslari",
      text: "Ushbu besh kunlik intensiv kurs sizga SpaceVMni boshqarish bo'yicha asosiy va ilg'or bilim va ko'nikmalarga ega bo'lishga yordam beradi. Ushbu kursda o'rganilgan o'rnatish va konfiguratsiya ma'lumotlariga asoslanib, siz ilg'or boshqaruv usullarini o'rganasiz...",
      data: "16 — 20 Декабря 2024",
      sinf: "Virtual sinf",
      type: "Masofadan",
      price: "24 000 руб.",
    },

    {
      id: 2,
      img: akademiya,
      title: "Axborot xavfsizligi. Maxfiy ma'lumotlarni texnik himoya qilish",
      text: "Axborot xavfsizligi. Maxfiy ma'lumotlarni texnik himoya qilish Kasbiy qayta tayyorlash dasturi “Axborot xavfsizligi.Maxfiy axborotni texnik muhofaza qilish” axborot xavfsizligi sohasida kasbiy faoliyatni amalga oshirish uchun mutaxassisni har tomonlama tayyorlash uchun moʻljallangan boʻlib, bu maxfiy axborotni himoya qilishni taʼminlash bilan bogʻliq muammolar majmuini oʻz ichiga oladi...",
      data: "18 Декабря 2024 — 07 Апреля 2025",
      sinf: "Virtual sinf",
      type: "Masofadan",
      price: "19 000 руб.",
    },

    {
      id: 3,
      img: akademiya,
      title:
        "Axborot xavfsizligi. Davlat sirini tashkil etuvchi ma'lumotlarni o'z ichiga olmagan kirish huquqi cheklangan ma'lumotlarning himoya qilinishini ta'minlash",
      text: "Dastur axborotning texnik muhofazasini, shu jumladan muhim CII ob'ektlarini himoya qilishni har tomonlama ta'minlashga qodir bo'lgan axborot xavfsizligi bo'yicha mutaxassislarni tayyorlaydi. Kasbiy qayta tayyorlash dasturi Rossiya FSTEC bilan kelishilgan va litsenziya talabgorlari (litsenziatlari) xodimlarining malaka talablarini bajarishga qaratilgan...",
      data: "18 Декабря 2024 — 29 Апреля 2025",
      sinf: "Virtual sinf",
      type: "Masofadan",
      price: "41 000 руб.",
    },
  ];

  const CheckId = (id) => {
    setCheckedIds((prevCheckedIds) => {
      if (prevCheckedIds.includes(id)) {
        return prevCheckedIds.filter((item) => item !== id);
      } else {
        return [...prevCheckedIds, id];
      }
    });
  };
  return (
    <div className="grid grid-cols-1 gap-5">
      {upcomingData?.map((value, index) => (
        <div key={index} className="border-[1px] border-[#e5e5e5]">
          <div className="flex justify-between items-center border-b-[1px] border-[#e5e5e5]">
            <div className="w-[10%] px-2 md:hidden">
              <img src={value.img} alt="softline" className="mx-auto" />
            </div>

            <div className="w-[75%] py-5 text-[#444] md:px-3">
              <Link to="/" className="font-bold lg:text-[14px]">
                {value.title}
              </Link>
              <p className="text-[14px] my-3 lg:text-[12px]">{value.text}</p>
            </div>

            <div className="w-[15%] md:w-[25%] text-center">
              <div className="flex items-center justify-center gap-2">
                <div
                  onClick={() => CheckId(value.id)}
                  className="w-[20px] cursor-pointer h-[20px] lg:h-[14px] lg:w-[14px] flex items-center justify-center rounded-full border-[1px] border-gray-400"
                >
                  <span
                    className={`w-[7px] h-[7px] rounded-full ${
                      checkedIds.includes(value.id) && "bg-red-800"
                    }`}
                  ></span>
                </div>
                <span className="lg:text-[14px]">{value.type}</span>
              </div>
              <div className="lg:text-[14px]">{value.price}</div>
            </div>
          </div>

          <div className="flex justify-between items-center h-[52px] lg:h-[42px]">
            <div className="w-[10%] md:hidden">
              <img src={distanceIcon} className="mx-auto" alt="distanceIcon" />
            </div>
            <div className="w-[75%] flex justify-between items-center text-[#444] text-[14px]">
              <div className="flex items-center gap-3">
                <CiCalendar className="text-[22px] md:hidden" />
                {value.data}
              </div>
              <div className="mr-10">{value.sinf}</div>
            </div>
            <div className="w-[15%] md:w-[25%] flex items-center justify-center bg-[#cb0f41] text-white h-full">
              <button className="font-semibold uppercase lg:text-[12px]">
                Sotib olish
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DiscountedCourses;
