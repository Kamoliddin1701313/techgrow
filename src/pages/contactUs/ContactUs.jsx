import React, { useState } from "react";
import bgblur from "../../assets/images/bg-blur.png";
import { Button, Modal } from "antd";

function ContactUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      className="h-[360px] md:h-[320px] relative w-full bg-cover bg-repeat"
      style={{ backgroundImage: `url(${bgblur})` }}
    >
      <div className="max-w-[1200px] mx-auto flex h-[360px] md:h-[320px] items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-[42px] leading-[42px] uppercase font-light lg:text-[32px] lg:leading-[32px] md:text-[24px]">
            MUVOFIQ KURS topa olmayapsizmi?
          </h1>

          <p className="text-[22px] my-6 font-light lg:my-3 lg:text-[18px]">
            Tashkilotingiz uchun trening uchun so'rov yuboring
          </p>

          <button
            onClick={showModal}
            className="w-1/2 hover:bg-[#cb0f41] hover:scale-105 hover:border-[1px] transition-all duration-700 ease-linear h-[48px] border-[2px] uppercase border-white rounded-md lg:h-[38px] lg:mt-3 lg:text-[14px] md:text-[12px]"
          >
            Biz bilan bog'lanish
          </button>
        </div>

        <Modal
          className=""
          title="Menejerga murojaat qiling"
          open={isModalOpen}
          footer={null}
          onCancel={handleCancel}
          width="60%"
        >
          <form className="grid grid-cols-1 p-6 gap-3 md:p-0 lg:p-2">
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
      </div>
    </div>
  );
}

export default ContactUs;
