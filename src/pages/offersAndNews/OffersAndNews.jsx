import React from "react";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import aktsiya_banner from "../../assets/images/aktsiya_banner.png";
import distanceIcon from "../../assets/images/distanceIcon.png";

function OffersAndNews() {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto flex justify-between py-8 xl:px-3 h-[670px] lg:h-[600px] md:h-[980px] sm:h-[1010px] lg:gap-5 md:flex md:flex-col-reverse">
        <div className="w-[65%] lg:w-[70%] md:w-full">
          <h1 className="text-[#444] md:text-center text-[28px] uppercase lg:text-[22px] md:text-[18px]">
            Aktsiyalar va maxsus takliflar
          </h1>
          <div className="w-full h-[1px] bg-[#dcdcdc] mt-4"></div>

          <div className="w-full border-[1px] border-[#dcdcdc] mt-14 lg:mt-10 text-[#444]">
            <div className="flex justify-between md:flex-col">
              <div className="p-5">
                <img
                  src={aktsiya_banner}
                  className="md:w-full md:h-[150px]"
                  alt="aktsiya_banner"
                />
              </div>

              <div className="p-5">
                <Link
                  to="/"
                  className="font-semibold text-[18px] hover:opacity-75"
                >
                  Raqamli kasblar uchun to'lov rejasi
                </Link>
                <p className="mt-2">
                  Aksiya taklifda ishtirok etuvchi barcha dasturlar uchun amal
                  qiladi
                </p>
              </div>
            </div>

            <div className="p-5 border-t-[1px] border-[#dcdcdc]">
              <Link
                to="/"
                className="flex items-center justify-between hover:text-[#cb0f41]"
              >
                <div className="flex items-center gap-3">
                  <img src={distanceIcon} alt="distanceIcon" />
                  <span>
                    Aksiya taklifda ishtirok etuvchi barcha dasturlar uchun amal
                    qiladi
                  </span>
                </div>

                <MdNavigateNext className="text-[24px]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[25%] lg:w-[30%] md:w-full">
          <h1 className="text-[#444] md:text-center text-[28px] uppercase lg:text-[22px] md:text-[18px]">
            Yangiliklar
          </h1>
          <div className="w-full h-[1px] bg-[#dcdcdc] mt-4 grid grid-cols-1 gap-4">
            <div className="h-[1px] w-full mt-14 bg-[#dcdcdc] lg:mt-10"></div>
            <span className="text-[#cb0f41] text-[14px]">05.12.2024</span>
            <Link
              to="/"
              className="font-semibold text-[16px] hover:opacity-75 lg:text-[14px]"
            >
              Softline Academy Cybertory platformasini ishga tushirdi - axborot
              xavfsizligi sohasida martaba boshlamoqchi bo'lganlar uchun makon
            </Link>

            <div className="h-[1px] w-full bg-[#dcdcdc]"></div>
            <span className="text-[#cb0f41] text-[14px]">21.11.2024</span>
            <Link
              to="/"
              className="font-semibold text-[16px] hover:opacity-75 lg:text-[14px]"
            >
              Softline Academy “Bizning xavfsizligimiz” onlayn bolalar
              oromgohini ishga tushirdi.
            </Link>

            <div className="h-[1px] w-full bg-[#dcdcdc]"></div>
            <span className="text-[#cb0f41] text-[14px]">20.11.2024</span>
            <Link
              to="/"
              className="font-semibold text-[16px] hover:opacity-75 lg:text-[14px]"
            >
              Softline Group Kasperskiy laboratoriyasi yechimlarini sotish hajmi
              bo'yicha yetakchiga aylandi
            </Link>
            <div className="h-[1px] w-full bg-[#dcdcdc]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersAndNews;
