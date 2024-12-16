import React, { useRef, useState } from "react";

import { LuSquareMenu } from "react-icons/lu";
import { FiUpload } from "react-icons/fi";
import CoursesHeader from "../../components/coursesHeader/CoursesHeader";

function Registration() {
  const [tanlash, setTanlash] = useState("tanlash");
  const [toggle, setToggle] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formValue, setFormValue] = useState({
    email: "",
    ism: "",
    familiya: "",
    telefon: "",
    tashkilotNomi: "",
    lavozim: "",
    parol: "",
    tasdiqlashParol: "",
  });

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const phone = formValue.telefon.slice(0, 12);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const ShowHiddenBtn = (e) => {
    e.preventDefault();
  };

  const SendMessage = (e) => {
    console.log(phone);
    setIsSubmitted(true);
    e.preventDefault();
    const isFormValid = Object.values(formValue).every(
      (value) => value.trim() !== ""
    );
    if (isFormValid) {
      setIsSubmitted(false);
      setFormValue({
        email: "",
        ism: "",
        familiya: "",
        telefon: "",
        tashkilotNomi: "",
        lavozim: "",
        parol: "",
        tasdiqlashParol: "",
      });
      console.log("Form ma'lumotlari:", formValue);
    }
    console.log(formValue);
  };

  return (
    <div>
      <CoursesHeader text="Yangi foydalanuvchi ro'yxatdan o'tish" />

      <div className="max-w-[1200px] mx-auto xl:px-3 py-8">
        <div className="w-[75%] md:w-full">
          <h1 className="text-[#cb0f41] text-[28px] font-light uppercase md:text-[24px] sm:text-[20px]">
            Yangi foydalanuvchi ro'yxatdan o'tish
          </h1>

          <div className="w-full h-[1px] my-4 bg-[#dcdcdc]"></div>
          <span className="text-[#444] font-semibold">
            Ijtimoiy tarmoqlar orqali ro'yxatdan o'tish:
          </span>

          <form onSubmit={ShowHiddenBtn} className="w-[80%] md:w-full my-5">
            <div className="flex items-center mt-8">
              <div className="flex items-center w-[30%] sm:w-[45%] gap-2">
                <input
                  name="tanlash"
                  onChange={() => setTanlash("tanlash")}
                  type="radio"
                  checked={tanlash == "tanlash" && true}
                />
                <span>Yuridik shaxs</span>
              </div>

              <div className="flex items-center w-[70%] gap-2">
                <input
                  name="tanlash"
                  onChange={() => setTanlash("tanlash2")}
                  type="radio"
                  checked={tanlash == "tanlash2" && true}
                />
                <span>Individual</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <span className="text-[#444] w-[30%] sm:w-[45%]">
                E-pochta manzili:*
              </span>
              <div className="relative w-[70%]">
                <input
                  onChange={handleInputChange}
                  value={formValue.email}
                  className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                  type="text"
                  name="email"
                />
                {isSubmitted && formValue.email.trim() === "" && (
                  <span className="text-red-600 absolute -bottom-6 left-0">
                    Ushbu qator to'ldirilishi shart.
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between my-10">
              <span className="text-[#444] w-[30%] sm:w-[45%]">Ism:*</span>
              <div className="relative w-[70%]">
                <input
                  onChange={handleInputChange}
                  value={formValue.ism}
                  className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                  type="text"
                  name="ism"
                />
                {isSubmitted && formValue.ism.trim() === "" && (
                  <span className="text-red-600 absolute -bottom-6 left-0">
                    Ushbu qator to'ldirilishi shart.
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between my-10">
              <span className="text-[#444] w-[30%] sm:w-[45%]">Familiya:*</span>
              <div className="relative w-[70%]">
                <input
                  onChange={handleInputChange}
                  value={formValue.familiya}
                  className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                  type="text"
                  name="familiya"
                />
                {isSubmitted && formValue.familiya.trim() === "" && (
                  <span className="text-red-600 absolute -bottom-6 left-0">
                    Ushbu qator to'ldirilishi shart.
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between my-10">
              <span className="text-[#444] w-[30%] sm:w-[45%]">Telefon:*</span>
              <div className="relative w-[70%]">
                <div className="flex items-center">
                  <select className="h-[42px] md:h-[32px] outline-none border-[1px] border-[#444] border-r-0 pr-1">
                    <option value="+23">+23</option>
                    <option value="+37">+37</option>
                    <option value="+255">+255</option>
                    <option value="+137">+137</option>
                    <option value="+7">+7</option>
                  </select>
                  <input
                    onChange={handleInputChange}
                    value={phone}
                    placeholder="XXX XX XXX XX XX"
                    className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                    type="number"
                    name="telefon"
                  />
                </div>
                {isSubmitted && formValue.telefon.trim() === "" && (
                  <span className="text-red-600 absolute -bottom-6 left-0">
                    Ushbu qator to'ldirilishi shart.
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between my-10">
              <span className="text-[#444] w-[30%] sm:w-[45%]">
                Tashkilot nomi:*
              </span>
              <div className="relative w-[70%]">
                <input
                  onChange={handleInputChange}
                  value={formValue.tashkilotNomi}
                  className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                  type="text"
                  name="tashkilotNomi"
                />
                {isSubmitted && formValue.tashkilotNomi.trim() === "" && (
                  <span className="text-red-600 absolute -bottom-6 left-0">
                    Ushbu qator to'ldirilishi shart.
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between my-10">
              <span className="text-[#444] w-[30%] sm:w-[45%]">Lavozim:*</span>
              <div className="relative w-[70%]">
                <input
                  onChange={handleInputChange}
                  value={formValue.lavozim}
                  className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                  type="text"
                  name="lavozim"
                />
                {isSubmitted && formValue.lavozim.trim() === "" && (
                  <span className="text-red-600 absolute -bottom-6 left-0">
                    Ushbu qator to'ldirilishi shart.
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between my-10">
              <span className="text-[#444] w-[30%] sm:w-[45%]">Parol:*</span>
              <div className="relative w-[70%]">
                <input
                  onChange={handleInputChange}
                  value={formValue.parol}
                  className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                  type="text"
                  name="parol"
                />
                {isSubmitted && formValue.parol.trim() === "" && (
                  <span className="text-red-600 absolute -bottom-6 left-0">
                    Ushbu qator to'ldirilishi shart.
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between my-10">
              <span className="text-[#444] w-[30%] sm:w-[45%]">
                Parolni tasdiqlash:*
              </span>
              <div className="relative w-[70%]">
                <input
                  onChange={handleInputChange}
                  value={formValue.tasdiqlashParol}
                  className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                  type="text"
                  name="tasdiqlashParol"
                />
                {isSubmitted && formValue.tasdiqlashParol.trim() === "" && (
                  <span className="text-red-600 absolute -bottom-6 left-0">
                    Ushbu qator to'ldirilishi shart.
                  </span>
                )}
              </div>
            </div>

            <span className="text-[#444] w-[30%]">
              Tafsilotlarni biriktiring
            </span>

            <div className="flex items-center gap-3 h-[48px] md:h-[38px] mt-2 text-[13px] text-[#222] font-semibold">
              <div className="h-full">
                <button
                  onClick={handleClick}
                  className="uppercase h-full px-7 bg-[#e6e6e6] rounded-l-[20px] flex items-center gap-3 tracking-[3px]"
                >
                  <FiUpload className="text-[24px] md:text-[20px]" />

                  <span>biriktir</span>
                </button>
                <input ref={fileInputRef} type="file" className="hidden" />
              </div>

              <button
                onClick={() => setToggle(!toggle)}
                className="uppercase px-7 flex items-center gap-3 rounded-r-[20px] bg-[#e6e6e6] h-full tracking-[3px]"
              >
                <LuSquareMenu className="text-[24px] md:text-[20px]" />
                <span>to'ldirish</span>
              </button>
            </div>

            <span className="text-[#444] mt-3 block">
              Tezkor hisob-faktura uchun tafsilotlarni to'ldiring.
            </span>
            {toggle && (
              <div className="flex flex-col gap-3 mt-5">
                <div>
                  <div className="flex flex-col">
                    <span className="text-[#444]">ИНН</span>
                    <input
                      className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <span className="text-[#444]">КПП</span>
                    <input
                      className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <span className="text-[#444]">Юридический адрес</span>
                    <input
                      className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <span className="text-[#444]">Банк</span>
                    <input
                      className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <span className="text-[#444]">БИК</span>
                    <input
                      className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <span className="text-[#444]">К/счет</span>
                    <input
                      className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <span className="text-[#444]">Р/счет</span>
                    <input
                      className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <span className="text-[#444]">Генеральный директор</span>
                    <input
                      className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <span className="text-[#444]">Главный бухгалтер</span>
                    <input
                      className={`text-[#444] outline-none w-full h-[42px] md:h-[32px] border-[1px] border-[#444] px-5`}
                      type="text"
                    />
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={SendMessage}
              className="font-bold uppercase text-[16px] text-white h-[48px] md:h-[38px] md:text-[14px] w-[45%] rounded-[10px] bg-[#cb0f41] mt-6"
            >
              Roʻyxatdan oʻtish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
