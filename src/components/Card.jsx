import React from "react";
import { Link } from "react-router-dom";
import news1 from "../assets/images/news1.jpg";
import news2 from "../assets/images/news2.jpg";
import news3 from "../assets/images/news3.jpg";
import main1 from "../assets/images/main1.png";
import main2 from "../assets/images/main2.png";
import main3 from "../assets/images/main3.png";
import main4 from "../assets/images/main4.png";
import main5 from "../assets/images/main5.png";
import main6 from "../assets/images/main6.png";
import main7 from "../assets/images/main7.png";
import main8 from "../assets/images/main8.png";

function Card() {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="max-w-[1200px] mx-auto pt-20 xl:px-3">
        <div className="grid grid-cols-3 gap-5 lg:gap-3 md:grid-cols-2 md:gap-y-8 sm:grid-cols-1">
          <div>
            <Link
              to="/news/akademiya-softline-zapustila-platformu-kibertori-prostranstvo-dlya-tekh-kto-khochet-nachat-kareru-v-/"
              className="flex gap-4 items-start lg:gap-2"
            >
              <img src={news1} alt="news1" />
              <span className="text-black font-semibold text-[14px] hover:text-[#cb0f41] lg:text-[12px]">
                Softline Academy Cybertory platformasini ishga tushirdi -
                axborot xavfsizligi sohasida martaba boshlamoqchi bo'lganlar
                uchun makon
              </span>
            </Link>
          </div>

          <div>
            <Link
              to="/news/akademiya-softline-zapustila-detskiy-onlayn-lager-nasha-bezopasnost/"
              className="flex gap-4 items-start lg:gap-2"
            >
              <img src={news2} alt="news2" />
              <span className="text-black font-semibold text-[14px] hover:text-[#cb0f41] lg:text-[12px]">
                Softline Academy “Bizning xavfsizligimiz” onlayn bolalar
                oromgohini ishga tushirdi.
              </span>
            </Link>
          </div>

          <div className="relative">
            <Link
              to="/news/gk-softline-stala-liderom-po-obemam-prodazh-resheniy-laboratorii-kasperskogo-/"
              className="flex gap-4 items-start lg:gap-2"
            >
              <img src={news3} alt="news3" />
              <span className="text-black font-semibold text-[14px] hover:text-[#cb0f41] lg:text-[12px]">
                Softline Group Kasperskiy laboratoriyasi yechimlarini sotish
                hajmi bo'yicha yetakchiga aylandi
              </span>
            </Link>
            <Link
              to="/news"
              className="text-black absolute -bottom-4 right-0 font-semibold text-[14px] hover:text-[#cb0f41]"
            >
              Barcha yangiliklar
            </Link>
          </div>
        </div>

        <div className="py-16">
          <h1 className="text-center text-[#444] mb-[18px] text-[28px] lg:text-[24px] md:text-[20px]">
            Nima uchun Softline o'quv markazini tanlash kerak?
          </h1>
          <div className="grid grid-cols-4 gap-8 py-5 lg:gap-4 md:grid-cols-2">
            <div>
              <img src={main1} alt="main1" />
              <p className="text-[#444] mb-[14px] text-[18px] py-2 xl:text-[16px]">
                Bozorda qo'shimcha ta'lim
              </p>
            </div>

            <div>
              <img src={main2} alt="main2" />
              <p className="text-[#444] mb-[14px] text-[18px] py-2 xl:text-[16px]">
                Imkoniyat har qandayidan o'rganish dunyo nuqtalari
              </p>
            </div>

            <div>
              <img src={main3} alt="main3" />
              <p className="text-[#444] mb-[14px] text-[18px] py-2 xl:text-[16px]">
                Litsenziya ta'lim uchun faoliyat
              </p>
            </div>

            <div>
              <img src={main4} alt="main4" />
              <p className="text-[#444] mb-[14px] text-[18px] py-2 xl:text-[16px]">
                Ruxsatnomalar yetakchi dasturiy ta'minot ishlab chiqaruvchilari
              </p>
            </div>

            <div>
              <img src={main5} alt="main5" />
              <p className="text-[#444] mb-[14px] text-[18px] py-2 xl:text-[16px]">
                Eng yaxshi murabbiylar boy amaliy tajribaga ega
              </p>
            </div>

            <div>
              <img src={main6} alt="main6" />
              <p className="text-[#444] mb-[14px] text-[18px] py-2 xl:text-[16px]">
                Xalqaro markazlarda sertifikatlar Softline testi
              </p>
            </div>

            <div>
              <img src={main7} alt="main7" />
              <p className="text-[#444] mb-[14px] text-[18px] py-2 xl:text-[16px]">
                O‘quv xonalari jihozlangan yuqori texnologiya uskunalar
              </p>
            </div>

            <div>
              <img src={main8} alt="main8" />
              <p className="text-[#444] mb-[14px] text-[18px] py-2 xl:text-[16px]">
                Moslashtirilgan moslashuvchan o'qitish yondashuvi korporativ
                mijozlar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
