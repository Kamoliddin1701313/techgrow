import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import softline from "../../assets/images/softline.png";
import distanceIcon from "../../assets/images/distanceIcon.png";
import posgrespro from "../../assets/images/posgrespro.png";
import kaspersky from "../../assets/images/kaspersky.png";
import ofisp7 from "../../assets/images/ofisp7.png";
import space from "../../assets/images/space.png";
import akademiya from "../../assets/images/akademiya.png";
import { Link } from "react-router-dom";

function ProfessionalDevelopmentCourses() {
  const [checkedIds, setCheckedIds] = useState([]);

  const upcomingData = [
    {
      id: 1,
      img: kaspersky,
      title: "Kasperskiyning yagona monitoring va tahlil platformalari",
      text: "Ushbu kursning o'quv dasturi ma'lumotlar bazasini boshqarish va Unix OS bilan ishlaydigan mutaxassislar uchun mo'ljallangan.",
      data: "16 — 18 Декабря 2024",
      sinf: "Virtual sinf",
      type: "Masofadan",
      price: "17 000 руб.",
    },

    {
      id: 2,
      img: ofisp7,
      title: "P7-Office: avariya kursi, asosiy dastur funktsiyalari",
      text: "Ushbu kurs P7-Office ilovalari, ularning maqsadi va funksionalligi haqida umumiy ma'lumot beradi. Shu kabi ofis ilovalari bilan ishlashda katta tajribaga ega bo'lgan, buyruqlar va harakatlar haqida batafsil aytib berishga hojat bo'lmagan talabalar uchun javob beradi...",
      data: "16 — 16 Декабря 2024",
      sinf: "Virtual sinf",
      type: "Masofadan",
      price: "10 000 руб.",
    },

    {
      id: 3,
      img: softline,
      title: "Kriptografik usullar yordamida axborotni himoya qilish",
      text: "Qonunchilikdagi joriy yangiliklarni hisobga olgan holda axborot xavfsizligining eng mashhur sohasi sirlari va xususiyatlari. Ushbu kurs kriptografik axborotni himoya qilish texnologiyalari va usullarini batafsil tahlil qiladi (elektron imzo, shifrlash, blokcheyn xeshlash va...",
      data: "16 — 18 Декабря 2024",
      sinf: "Virtual sinf",
      type: "Masofadan",
      price: "18 000 руб.",
    },

    {
      id: 4,
      img: posgrespro,
      title: "PostgreSQL boshqaruvi 13. Konfiguratsiya va monitoring",
      text: "Ushbu kursning o'quv dasturi ma'lumotlar bazasini boshqarish va Unix OS bilan ishlaydigan mutaxassislar uchun mo'ljallangan.",
      data: "6 — 19 Декабря 2024",
      sinf: "Moskva, Varshavskoe shossesi, 47-uy, uy. 4, 7-qavat",
      type: "To'liq stavka",
      price: "14 000 руб.",
    },

    {
      id: 5,
      img: kaspersky,
      title: "Kasperskiyning yagona monitoring va tahlil platformalari",
      text: "Ushbu kursning o'quv dasturi ma'lumotlar bazasini boshqarish va Unix OS bilan ishlaydigan mutaxassislar uchun mo'ljallangan.",
      data: "16 — 18 Декабря 2024",
      sinf: "Virtual sinf",
      type: "Masofadan",
      price: "17 000 руб.",
    },

    {
      id: 6,
      img: ofisp7,
      title: "P7-Office: avariya kursi, asosiy dastur funktsiyalari",
      text: "Ushbu kurs P7-Office ilovalari, ularning maqsadi va funksionalligi haqida umumiy ma'lumot beradi. Shu kabi ofis ilovalari bilan ishlashda katta tajribaga ega bo'lgan, buyruqlar va harakatlar haqida batafsil aytib berishga hojat bo'lmagan talabalar uchun javob beradi...",
      data: "16 — 16 Декабря 2024",
      sinf: "Virtual sinf",
      type: "Masofadan",
      price: "10 000 руб.",
    },

    {
      id: 7,
      img: softline,
      title: "Linux tarmoq ma'muriyati",
      text: "Agar siz allaqachon foydalanuvchi darajasida Linux operatsion tizimi bilan ishlash bo'yicha ishonchli ko'nikmalarga ega bo'lsangiz va buyruq satrida ishlashni yaxshi bilsangiz, unda siz to'rt kunlik...",
      data: "16 — 19 Декабря 2024",
      sinf: "Virtual sinf",
      type: "Masofadan",
      price: "23 000 руб.",
    },

    {
      id: 8,
      img: softline,
      title: "Tarmoq muhandislari uchun Python dasturlash asoslari",
      text: "Ushbu kurs Python dasturlash tilini (boshqa dasturlash tillarida tajribaga ega va tajribasiz) o'zlashtirishni boshlashni istaganlar uchun mo'ljallangan. Kursning maqsadi yangi kompetensiyalarni egallashdir...",
      data: "16 — 20 Декабря 2024",
      sinf: "Virtual sinf",
      type: "Masofadan",
      price: "39 000 руб.",
    },

    {
      id: 9,
      img: softline,
      title: "Продвинутое администрирование CommuniGate Pro",
      text: "CP-03 kursi - bu CP-02 kursi mavzulari bilan tanish bo'lgan ofis ishi uchun aloqa platformasining ilg'or ma'murlari uchun kurs. Kurs amaliy yo'nalishga ega. Tinglovchiga nafaqat nazariy bilim berish, balki amalda qo‘llashni ham o‘rgatish muhim...",
      data: "16 — 20 Декабря 2024",
      sinf: "Virtual sinf",
      type: "Masofadan",
      price: "12 000 руб.",
    },

    {
      id: 10,
      img: space,
      title: "SpaceVM virtualizatsiya tizimini boshqarish asoslari",
      text: "Ushbu besh kunlik intensiv kurs sizga SpaceVMni boshqarish bo'yicha asosiy va ilg'or bilim va ko'nikmalarga ega bo'lishga yordam beradi. Ushbu kursda o'rganilgan o'rnatish va konfiguratsiya ma'lumotlariga asoslanib, siz ilg'or boshqaruv usullarini o'rganasiz...",
      data: "16 — 20 Декабря 2024",
      sinf: "Virtual sinf",
      type: "Masofadan",
      price: "24 000 руб.",
    },

    {
      id: 11,
      img: akademiya,
      title: "Axborot xavfsizligi. Maxfiy ma'lumotlarni texnik himoya qilish",
      text: "Axborot xavfsizligi. Maxfiy ma'lumotlarni texnik himoya qilish Kasbiy qayta tayyorlash dasturi “Axborot xavfsizligi.Maxfiy axborotni texnik muhofaza qilish” axborot xavfsizligi sohasida kasbiy faoliyatni amalga oshirish uchun mutaxassisni har tomonlama tayyorlash uchun moʻljallangan boʻlib, bu maxfiy axborotni himoya qilishni taʼminlash bilan bogʻliq muammolar majmuini oʻz ichiga oladi...",
      data: "18 Декабря 2024 — 07 Апреля 2025",
      sinf: "Virtual sinf",
      type: "Masofadan",
      price: "19 000 руб.",
    },

    {
      id: 12,
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

export default ProfessionalDevelopmentCourses;
