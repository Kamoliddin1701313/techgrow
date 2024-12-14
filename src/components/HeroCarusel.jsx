import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
import { FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import herocaruselimg1 from "../assets/images/herocaruselimg1.png";
import herocaruselimg2 from "../assets/images/herocaruselimg2.png";
import herocaruselimg3 from "../assets/images/herocaruselimg3.png";
import herocaruselimg4 from "../assets/images/herocaruselimg4.png";
import herocaruselimg5 from "../assets/images/herocaruselimg5.png";
import herocaruselimg6 from "../assets/images/herocaruselimg6.png";
import herocaruselimg7 from "../assets/images/herocaruselimg7.png";
import herocaruselimg8 from "../assets/images/herocaruselimg8.png";
import vk from "../assets/images/vk.png";
import telegram from "../assets/images/telegram.png";
import zen from "../assets/images/zen.png";

function HeroCarusel() {
  const caruselimgages = [
    {
      id: 1,
      caruselTitle: "Cybertory - bular uchun noyob makon",
      img: herocaruselimg1,
      caruselText:
        "Kim axborot xavfsizligi sohasida karerasini boshlashni xohlaydi",
      pageLink:
        "akademiya-softline-zapustila-platformu-kibertori-prostranstvo-dlya-tekh-kto-khochet-nachat-kareru-v-/?utm_source=banner_sl&utm_campaign=cybertory",
    },

    {
      id: 2,
      caruselTitle: "Softline Academyda axborot xavfsizligi oyligi",
      img: herocaruselimg2,
      caruselText: "Yuqori dasturlarda foydali o'rganing",
      pageLink:
        "offers/mesyats-informatsionnoy-bezopasnosti-v-akademii-softline/?utm_source=banner_sl&utm_campaign=month_ib",
    },

    {
      id: 3,
      caruselTitle: "Korporativ mijozlar uchun yangi yil taklifi",
      img: herocaruselimg3,
      caruselText:
        "Xodimlaringiz uchun kurslar kutubxonasiga obuna bo'ling | 350 dan ortiq kurslar",
      pageLink:
        "offers/mesyats-informatsionnoy-bezopasnosti-v-akademii-softline/?utm_source=banner_sl&utm_campaign=month_ib",
    },

    {
      id: 4,
      caruselTitle: "Bizning xavfsizligimiz bolalar onlayn-lageri",
      img: herocaruselimg4,
      caruselText: "Onlayn xavflar haqida xabardorlikni oshirish",
      pageLink:
        "akademiya-softline-zapustila-platformu-kibertori-prostranstvo-dlya-tekh-kto-khochet-nachat-kareru-v-/?utm_source=banner_sl&utm_campaign=cybertory",
    },

    {
      id: 5,
      caruselTitle: "P7-Office ofis ilovalari bilan ishlash bo'yicha trening",
      img: herocaruselimg5,
      caruselText: "Yangi elektron kurslar qatorida",
      pageLink:
        "akademiya-softline-zapustila-platformu-kibertori-prostranstvo-dlya-tekh-kto-khochet-nachat-kareru-v-/?utm_source=banner_sl&utm_campaign=cybertory",
    },

    {
      id: 6,
      caruselTitle: "Kasperskiy laboratoriyasidan vakolatli trening",
      img: herocaruselimg6,
      caruselText:
        "Turli darajadagi mutaxassislar uchun martaba yo'llari va kurslar",
      pageLink:
        "akademiya-softline-zapustila-platformu-kibertori-prostranstvo-dlya-tekh-kto-khochet-nachat-kareru-v-/?utm_source=banner_sl&utm_campaign=cybertory",
    },

    {
      id: 7,
      caruselTitle: "Astra Linux kurslarining kengaytirilgan diapazoni",
      img: herocaruselimg7,
      caruselText:
        "Har qanday darajadagi tayyorgarlik bilan | Ruxsat etilgan kurslar va imtihonlar",
      pageLink:
        "akademiya-softline-zapustila-platformu-kibertori-prostranstvo-dlya-tekh-kto-khochet-nachat-kareru-v-/?utm_source=banner_sl&utm_campaign=cybertory",
    },

    {
      id: 8,
      caruselTitle: "Ruxsat etilgan RED SOFT kurslari",
      img: herocaruselimg8,
      caruselText:
        "Foydalanuvchilar, tizim ma'murlari va boshqa IT mutaxassislari uchun trening",
      pageLink:
        "akademiya-softline-zapustila-platformu-kibertori-prostranstvo-dlya-tekh-kto-khochet-nachat-kareru-v-/?utm_source=banner_sl&utm_campaign=cybertory",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`bg-[#f2f2f2] ${scrolled && "pt-16"}`}>
      <div className={`max-w-[1200px] mx-auto relative`}>
        <p className={`absolute top-3 z-20 text-[#444] xl:left-3`}>
          O'quv markaz
        </p>

        <Slider {...settings}>
          {caruselimgages.map((value, index) => (
            <div key={index} className="h-[320px] w-full xl:px-3">
              <div className="flex justify-between items-center gap-8 md:gap-2">
                <div className="h-full flex flex-col justify-center w-3/5">
                  <Link
                    to={value.pageLink}
                    className="text-[#222] block text-[36px] leading-10 font-light mb-4 mt-12 xl:text-[30px] lg:text-[26px] lg:leading-8 md:text-[22px]"
                  >
                    {value.caruselTitle}
                  </Link>

                  <Link
                    to={value.pageLink}
                    className="text-[#B62C46] text-[22px] mb-4 xl:text-[18px] leading-8 lg:text-[16px] lg:leading-6"
                  >
                    {value.caruselText}
                  </Link>

                  <Link
                    to={value.pageLink}
                    className="flex items-center gap-2 font-bold"
                  >
                    <span className="text-[#444] text-[22px] xl:text-[18px] lg:text-[16px]">
                      Batafsil
                    </span>
                    <GrFormNext className="text-[#B62C46] text-[24px]" />
                  </Link>

                  <div className="flex items-center gap-2 mt-6 md:mt-3">
                    <span>Obuna boʻling:</span>
                    <div className="flex items-center gap-3">
                      <a href="https://vk.com/edu_softline" target="_blank">
                        <img src={vk} alt="vk" className="lg:w-[22px]" />
                      </a>

                      <a href="https://t.me/softline_education" target="_blank">
                        <img
                          src={telegram}
                          alt="telegram"
                          className="lg:w-[20px]"
                        />
                      </a>

                      <a
                        href="https://zen.yandex.ru/id/5e68a42c595b8e63047af5e9"
                        target="_blank"
                      >
                        <img src={zen} alt="zen" className="lg:w-[20px]" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="h-full flex justify-center items-center w-2/5">
                  <img
                    src={value.img}
                    alt="carousel"
                    className="h-[300px] max-w-[400px] lg:w-[300px] md:w-[200px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/*  */}
        <form className="w-full h-[52px] mt-8 flex items-center xl:px-3 lg:h-[42px]">
          <input
            type="text"
            className="w-4/5 h-full px-[27px] border-[1px] outline-none border-[#dbdcdc]"
            placeholder="Siz nimani o'rganmoqchisiz?"
          />
          <button className="uppercase w-1/5 h-full font-bold text-white bg-[#c61143] md:text-[13px]">
            toping
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroCarusel;
