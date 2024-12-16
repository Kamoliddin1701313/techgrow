import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";
import { Modal } from "antd";
// import trainerhead from "../../assets/images/trainerhead.jpg";

function CoursesHeader({ text }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenImg, setIsModalOpenImg] = useState(false);
  const [modalWidth, setModalWidth] = useState("90%");
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth >= 992) {
        setModalWidth("60%");
      } else {
        setModalWidth("80%");
      }
    };

    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModalImg = () => {
    setIsModalOpenImg(true);
  };

  const handleCancelImg = () => {
    setIsModalOpenImg(false);
  };

  return (
    <div className="bg-[#f7f7f7]">
      <div className="max-w-[1200px] mx-auto flex justify-between py-3 xl:px-3 sm:flex-col">
        <div>
          <div className="text-[#4444444d] flex gap-1 items-center">
            <Link to="/" className="hover:text-[#cb0f41]">
              O'quv markazi
            </Link>
            <GrFormNext />
            <span>Roʻyxatdan oʻtish</span>
          </div>
          <h1 className="mt-3 text-[#222] text-[26px] md:text-[22px]">
            {text}
          </h1>
        </div>

        <div className="flex flex-col">
          <span className="text-[#444] my-4 font-bold">Kontaktlar</span>
          <a className="text-[#444] font-bold underline" href="tel:88005050507">
            8 800 505 05 07
          </a>
          <a className="my-1 underline" href="mailto:edusales@softline.com">
            edusales@softline.com
          </a>
          <div className="flex flex-col gap-y-3 my-3 text-[12px] font-bold text-white">
            <button
              onClick={showModal}
              className="h-[38px] w-full uppercase hover:scale-x-105 ease-in duration-300 transition-all rounded-[5px] bg-[#cb0f41]"
            >
              Hozir bog'laning
            </button>
            <button
              onClick={showModalImg}
              className="h-[38px] w-full uppercase hover:scale-x-105 ease-in duration-300 transition-all rounded-[5px] bg-[#cb0f41]"
            >
              Trener bo'lish
            </button>
          </div>

          <Modal
            centered
            open={isModalOpen}
            footer={null}
            onCancel={handleCancel}
            width={modalWidth}
          >
            <form className="grid grid-cols-1 p-6 gap-3 md:p-0 lg:p-2">
              <h1 className="text-[24px] font-bold text-[#cb0f41]">
                Menejerga murojaat qiling
              </h1>
              <div>
                <span>Ismingiz * :</span>
                <input
                  required
                  type="text"
                  placeholder="Iltimos, o'zingizni tanishtiring"
                  className="h-[52px] lg:h-[42px] md:h-[32px] px-5 outline-none border-[1px] w-full border-gray-500 sm:h-[42px]"
                />
              </div>

              <div>
                <span>Telefon * :</span>
                <input
                  required
                  type="text"
                  placeholder="Telefon raqamingizni kiriting"
                  className="h-[52px] lg:h-[42px] md:h-[32px] px-5 outline-none border-[1px] w-full border-gray-500 sm:h-[42px]"
                />
              </div>

              <div>
                <span>Elektron pochta * :</span>
                <input
                  required
                  type="text"
                  placeholder="Elektron pochtangizni kiriting"
                  className="h-[52px] lg:h-[42px] md:h-[32px] px-5 outline-none border-[1px] w-full border-gray-500 sm:h-[42px]"
                />
              </div>

              <div>
                <span>Sizning savolingiz * :</span>
                <textarea
                  rows={3}
                  className="p-5 resize-none outline-none border-[1px] w-full border-gray-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-2/5 h-[52px] lg:h-[42px] md:h-[32px] rounded-[6px] relative left-[60%] text-center bg-[#cb0f41] text-white font-semibold sm:h-[42px]"
              >
                Yuborish
              </button>
            </form>
          </Modal>

          {/*  */}
          <Modal
            open={isModalOpenImg}
            footer={null}
            onCancel={handleCancelImg}
            width={modalWidth}
          >
            <form className="grid grid-cols-1 p-6 gap-3 lg:p-2 md:p-5 sm:p-0">
              {/* <div className="w-full h-[230px] lg:h-[180px] md:h-[140px] sm:mt-5">
                <img
                  className="w-full h-full"
                  src={trainerhead}
                  alt="trainerhead"
                />
              </div> */}

              <p>
                IT-trener - bu talab qilinadigan kasb bo'lib, u dolzarb bo'lib
                qolmoqda va so'nggi yillarda mashhurlik kasb etmoqda. O'quv
                markazimizda IT-trener bo'lishni xohlaysizmi? Keyin quyidagi
                shaklni to'ldiring va biz siz bilan bog'lanamiz! Biz nafaqat
                katta tajribaga ega mutaxassislarni, balki zamonaviy va
                istiqbolli kasbni egallashni istagan yosh mutaxassislarni ham
                kutamiz.
              </p>

              <div>
                <span>Familiyasi, otasining ismi*</span>
                <input
                  required
                  type="text"
                  placeholder="Familiyasi, otasining ismi"
                  className="h-[52px] lg:h-[42px] md:h-[32px] px-5 outline-none border-[1px] w-full border-gray-500 sm:h-[42px]"
                />
              </div>

              <div>
                <span>Shahar*</span>
                <input
                  required
                  type="text"
                  placeholder="Shahar"
                  className="h-[52px] lg:h-[42px] md:h-[32px] px-5 outline-none border-[1px] w-full border-gray-500 sm:h-[42px]"
                />
              </div>

              <div>
                <span>Pochta*</span>
                <input
                  required
                  type="text"
                  placeholder="Elektron pochtangizni kiriting"
                  className="h-[52px] lg:h-[42px] md:h-[32px] px-5 outline-none border-[1px] w-full border-gray-500 sm:h-[42px]"
                />
              </div>

              <div>
                <span>Телефон*</span>
                <input
                  required
                  maxLength={12}
                  type="text"
                  placeholder="+998 XX XXX XX XX"
                  className="h-[52px] lg:h-[42px] md:h-[32px] px-5 outline-none border-[1px] w-full border-gray-500 sm:h-[42px]"
                />
              </div>

              <div>
                <span>Sizning savolingiz * :</span>
                <textarea
                  required
                  rows={3}
                  className="p-5 resize-none outline-none border-[1px] w-full border-gray-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-2/5 h-[52px] lg:h-[42px] md:h-[32px] rounded-[6px] relative left-[60%] text-center bg-[#cb0f41] text-white font-semibold sm:h-[42px]"
              >
                Yuborish
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default CoursesHeader;
