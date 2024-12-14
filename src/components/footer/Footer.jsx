import React from "react";
import { Link } from "react-router-dom";
import { FaVk } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaCreativeCommonsZero } from "react-icons/fa";
import footer_logo from "../../assets/images/footer_logo.png";

export default function Footer() {
  return (
    <div className="max-w-[1200px] mx-auto xl:px-3">
      <h1 className="my-10 text-[#444] text-[24px] lg:text-[20px] md:mb-5 lg:text-center">
        Biz yuridik va jismoniy shaxslar bilan ishlaymiz. Hisob-faktura yoki
        karta orqali to'lash
      </h1>

      <div className="flex justify-between items-start gap-8 lg:gap-4 md:grid md:grid-cols-3 sm:grid-cols-2">
        <div className="grid grid-cols-1 w-1/4 gap-3 md:w-full">
          <div className="w-full h-[1px] bg-[#ddd]"></div>

          <div>
            <a
              href="mailto:edusales@softline.com"
              className="text-[18px] lg:text-[12px] text-[#cb0f41] font-bold"
            >
              edusales@softline.com
            </a>
          </div>

          <div className="w-full h-[1px] bg-[#ddd]"></div>

          <div>
            <a
              href="tel:88005050507"
              className="text-[18px] lg:text-[12px] text-[#cb0f41] font-bold"
            >
              8 800 505 05 07
            </a>
          </div>

          <div className="w-full h-[1px] bg-[#ddd]"></div>

          <div className="mt-4">
            <p className="text-[#444] text-[14px] font-semibold">
              Yuridik manzil:
            </p>
            <p className="text-[#444] text-[14px] font-normal">
              115230, Moskva, vn.ter.g. shahar tumani Nagatino-Sadovniki, sh
              Varshavskoye, 47, 4-bino, xona. 19
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="w-full h-[1px] bg-[#ddd]"></div>
          <div>
            <Link className="text-[#444] text-[14px] font-normal" to="/">
              Dasturiy ta'minot
            </Link>
          </div>
          <div>
            <Link className="text-[#444] text-[14px] font-normal" to="/">
              Maxsus takliflar
            </Link>
          </div>
          <div>
            <Link className="text-[#444] text-[14px] font-normal" to="/">
              Texnik yordam
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="w-full h-[1px] bg-[#ddd]"></div>
          <div>
            <Link className="text-[#444] text-[14px] font-normal" to="/">
              Seminarlar va vebinarlar
            </Link>
          </div>
          <div>
            <Link className="text-[#444] text-[14px] font-normal" to="/">
              Chop etilgan dasturiy ta'minot katalogi
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="w-full h-[1px] bg-[#ddd]"></div>
          <div>
            <Link className="text-[#444] text-[14px] font-normal" to="/">
              Kompaniya haqida
            </Link>
          </div>
          <div>
            <Link className="text-[#444] text-[14px] font-normal" to="/">
              Softline'da ishlash
            </Link>
          </div>
          <div>
            <Link className="text-[#444] text-[14px] font-normal" to="/">
              Kontaktlar
            </Link>
          </div>
          <div>
            <Link className="text-[#444] text-[14px] font-normal" to="/">
              Softline qabul qilish
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="w-full h-[1px] bg-[#ddd]"></div>
          <div className="flex items-center gap-6 lg:gap-2 justify-evenly">
            <a href="">
              <FaVk className="text-[24px] lg:text-[20px] text-[#ccc] hover:text-[#cb0f41] transition-all duration-300 ease-linear" />
            </a>
            <a href="">
              <RiTelegram2Fill className="text-[24px] lg:text-[20px] text-[#ccc] hover:text-[#cb0f41] transition-all duration-300 ease-linear" />
            </a>
            <a href="">
              <FaCreativeCommonsZero className="text-[20px] lg:text-[16px] text-[#ccc] hover:text-[#cb0f41] transition-all duration-300 ease-linear" />
            </a>
          </div>
          <div className="w-full h-[1px] bg-[#ddd]"></div>
        </div>
      </div>

      <p className="text-[#444] my-8 text-[14px] font-normal max-w-full break-words">
        Softline o'quv markazi geografiya va vaqt zonalari bilan cheklanmagan;
        Shaxsiy darslar Moskvada ishlaydi ,
        <Link to="/" className="text-[#cb0f41]">
          Sankt-Peterburg
        </Link>
        ,
        <Link to="/" className="text-[#cb0f41]">
          Yekaterinburg
        </Link>
        ,
        <Link to="/" className="text-[#cb0f41]">
          Krasnoyarsk
        </Link>
        ,
        <Link to="/" className="text-[#cb0f41]">
          Novosibirsk
        </Link>
        ,
        <Link to="/" className="text-[#cb0f41]">
          Xabarovsk
        </Link>
        , Shuningdek, biz Buyurtmachining hududida korporativ ta'lim
        xizmatlarini taqdim etamiz.
      </p>

      <div className="flex justify-between items-center">
        <p className="text-[#444] text-[14px] font-normal">
          © 1993—2024 Softline
        </p>

        <div className="flex items-center gap-10 md:justify-between md:gap-3">
          <Link className="text-[#444] text-[14px] font-normal" to="/">
            Foydalanish shartlari
          </Link>
          <Link className="text-[#444] text-[14px] font-normal" to="/">
            Maxfiylik siyosati
          </Link>
        </div>

        <p className="text-[18px] text-[#444] font-bold opacity-30">14+</p>
      </div>

      <div className="flex justify-center items-center mt-4 mb-12">
        <div>
          <Link>
            <img
              className="mx-auto hover:opacity-70"
              src={footer_logo}
              alt="footer_logo"
            />
          </Link>

          <p className="text-[#444] my-1 text-center text-[14px]">
            Softline o'quv markazi Softline Academy ta'lim ekotizimining bir
            qismidir
          </p>

          <p className="text-center text-[14px] text-[#444] font-bold">
            Trening orqali - muvaffaqiyatga! Bilim siz uchun ishlaydi
          </p>
        </div>
      </div>
    </div>
  );
}
