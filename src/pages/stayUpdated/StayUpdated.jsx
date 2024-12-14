import React, { useState } from "react";
import users from "../../assets/images/users.jpg";

function StayUpdated() {
  const [check, setCheck] = useState(false);
  const CheckBoxEvent = (e) => {
    const isChecked = e.target.checked;
    setCheck(isChecked);
    console.log(isChecked);
  };

  return (
    <div
      className="relative w-full h-[550px] lg:h-[450px] md:h-[400px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${users})`,
      }}
    >
      <div className="absolute inset-0 bg-[#262A35] bg-opacity-80"></div>
      <div className="max-w-[1200px] mx-auto z-20 relative top-1/2 -translate-y-1/2">
        <div className="flex items-center flex-col w-1/2 mx-auto lg:w-3/4 md:w-[90%]">
          <h1 className="text-[38px] text-white w-full md:text-[28px]">
            Xabardor bo'ling
          </h1>

          <form className="w-full my-6">
            <div className="flex gap-5 items-center justify-between">
              <input
                type="text"
                className="py-3 h-[48px] lg:h-[38px] text-white w-[65%] outline-none border-b-[2px] border-white bg-transparent"
                placeholder="Sizning elektron pochtangiz"
              />
              <input
                value="Obuna bo'ling"
                type="submit"
                disabled={!check}
                className={`w-[35%] uppercase font-semibold text-white h-[48px] lg:h-[38px] md:text-[12px] cursor-pointer bg-[#cb0f41]`}
              />
            </div>

            <div className="flex justify-between gap-4 mt-4">
              <input type="checkbox" onChange={CheckBoxEvent} />
              <p className="text-[#a6a8aa]">
                Men Shaxsiy ma'lumotlarning maxfiylik siyosatini o'qib chiqdim
                va men shaxsiy ma'lumotlarni qayta ishlashga roziman
              </p>
            </div>
          </form>

          <p className="text-[#a6a8aa] text-[18px] font-semibold">
            Yangi mahsulotlar, chegirmalar va aktsiyalar haqidagi ma'lumotlarga
            obuna bo'ling. 36 000 dan ortiq obunachi!
          </p>
        </div>
      </div>
    </div>
  );
}

export default StayUpdated;
