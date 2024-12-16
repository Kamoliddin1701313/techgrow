import { Link } from "react-router-dom";
import topleft from "../../assets/images/topleft.jpg";
import topright from "../../assets/images/topright.jpg";
import softlinelogo from "../../assets/images/softline.png";
import edulogo from "../../assets/images/edu-logo.png";
import { LuPhone } from "react-icons/lu";
import { TfiUser } from "react-icons/tfi";
import { TbSearch } from "react-icons/tb";
import { HiOutlineMenu } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { useEffect, useState } from "react";
import VendorsList from "../../pages/vendorsList/VendorsList";
import Pathways from "../../pages/pathways/Pathways";
import Exams from "../../pages/exams/Exams";
import OurStory from "../../pages/ourStory/OurStory";

import { Button, Modal } from "antd";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

  const [topBar, setTopBar] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const [onHoverTab, setOnHoverTab] = useState("0");

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

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={`w-full bg-white relative z-30`}>
      <div>
        <div className="flex w-full h-[136px]">
          <div className="flex-1">
            <img
              className="h-full w-full bg-cover	"
              src={topleft}
              alt="topleft"
            />
          </div>

          <div className="flex-1">
            <img
              className="h-full w-full obg-cover"
              src={topright}
              alt="topright"
            />
          </div>
        </div>

        <div className={`bg-[#f2f2f2] md:-mt-9 sm:-mt-9`}>
          <div className="flex justify-between items-center max-w-[1200px] h-[65px] mx-auto xl:px-3 relative md:mt-9">
            <div className="flex justify-between items-center gap-5 xl:gap-3">
              <Link to="/">
                <img
                  className="h-[60px] xl:w-[80px] hover:opacity-50"
                  src={softlinelogo}
                  alt="softlinelogo"
                />
              </Link>

              <Link to="/" className="hover:opacity-50 xl:w-[130px]">
                <img src={edulogo} alt="edulogo" />
              </Link>

              <a
                href="mailto:edusales@softline.com"
                className="text-[#444] hover:opacity-50 xl:text-[14px] lg:hidden"
              >
                edusales@softline.com
              </a>

              <span className="flex items-center gap-[10px] lg:hidden">
                <span className="w-[42px] h-[42px] rounded-[50%] border-[1px] border-[#dedede] flex items-center justify-center xl:w-[36px] xl:h-[36px]">
                  <LuPhone className="text-[#cb0f41] font-semibold text-[20px] xl:text-[15px]" />
                </span>
                <a
                  href="tel:88005050507"
                  className="text-[#444] hover:opacity-50 xl:text-[13px]"
                >
                  8 800 505 05 07
                </a>
              </span>
            </div>

            <div className="flex justify-between items-center gap-5 xl:gap-3">
              <Link
                onClick={() => setModalOpen(true)}
                to="/"
                className="text-[#cb0f41] font-semibold hover:opacity-50 xl:text-[13px] lg:hidden"
              >
                Yangiliklarga obuna bo'ling
              </Link>

              <Link
                to="/registration"
                className="flex text-[#444] items-center gap-3 hover:opacity-50 lg:hidden"
              >
                <span>
                  <TfiUser />
                </span>
                <span className="xl:text-[13px]">Roʻyxatdan oʻtish</span>
              </Link>

              <HiOutlineMenu
                onClick={() => setTopBar(!topBar)}
                className="hidden lg:block cursor-pointer"
              />
              <Link
                onClick={showModal}
                to="/"
                className="hover:opacity-50 text-[#444] xl:text-[13px] lg:text-[15px]"
              >
                Tizimga kirish
              </Link>
            </div>
          </div>

          <div
            className={`${
              topBar ? "block sm:grid sm:grid-cols-2 sm:text-center" : "hidden"
            } relative flex justify-between items-center bg-gray-500 py-3 gap-3 px-3`}
          >
            <a
              href="mailto:edusales@softline.com"
              className="text-[#444] hover:opacity-50 xl:text-[14px]"
            >
              edusales@softline.com
            </a>
            <span className="flex items-center gap-[10px]">
              <span className="w-[42px] h-[42px] rounded-[50%] border-[1px] border-[#dedede] flex items-center justify-center xl:w-[36px] xl:h-[36px] md:hidden">
                <LuPhone className="text-[#cb0f41] font-semibold text-[20px] xl:text-[15px]" />
              </span>
              <a
                href="tel:88005050507"
                className="text-[#444] sm:w-full hover:opacity-50 xl:text-[13px]"
              >
                8 800 505 05 07
              </a>
            </span>
            <Link
              onClick={() => setModalOpen(true)}
              to="/"
              className="text-[#cb0f41] font-semibold hover:opacity-50 xl:text-[13px]"
            >
              Yangiliklarga obuna bo'ling
            </Link>
            <Link
              to="/registration"
              className="flex text-[#444] items-center gap-3 hover:opacity-50"
            >
              <span className="md:hidden">
                <TfiUser />
              </span>
              <span className="xl:text-[13px] sm:w-full">
                Roʻyxatdan oʻtish
              </span>
            </Link>
          </div>
        </div>
      </div>

      <nav className={`${scrolled && "fixed top-0 mx-auto w-full bg-white"}`}>
        <div className="flex justify-between items-center max-w-[1200px] mx-auto py-5 xl:px-3">
          <div className={`flex items-center gap-5 xl:gap-3 lg:hidden`}>
            <Link
              onMouseEnter={() => setOnHoverTab("1")}
              to="/vendors"
              className="text-[#444] hover:opacity-50 font-bold xl:text-[14px]"
            >
              Sotuvchi kurslari
            </Link>

            <Link
              onMouseEnter={() => setOnHoverTab("2")}
              to="/"
              className="text-[#444] hover:opacity-50 font-bold xl:text-[14px]"
            >
              Yo'nalishlar
            </Link>

            <Link
              onMouseEnter={() => setOnHoverTab("3")}
              to="/"
              className="text-[#444] hover:opacity-50 font-bold xl:text-[14px]"
            >
              Imtihonlar
            </Link>

            <Link
              onMouseEnter={() => setOnHoverTab("4")}
              to="/"
              className="text-[#444] hover:opacity-50 font-bold xl:text-[14px]"
            >
              Jadval
            </Link>

            <Link
              onMouseEnter={() => setOnHoverTab("5")}
              to="/"
              className="text-[#444] hover:opacity-50 font-bold xl:text-[14px]"
            >
              Birja
            </Link>

            <Link
              onMouseEnter={() => setOnHoverTab("6")}
              to="/"
              className="text-[#444] hover:opacity-50 font-bold xl:text-[14px]"
            >
              Biz haqimizda
            </Link>

            <Link
              onMouseEnter={() => setOnHoverTab("7")}
              to="/"
              className="text-[#444] hover:opacity-50 font-bold xl:text-[14px]"
            >
              Yangiliklar
            </Link>

            <Link
              onMouseEnter={() => setOnHoverTab("8")}
              to="/"
              className="text-[#444] hover:opacity-50 font-bold xl:text-[14px]"
            >
              Voqealar
            </Link>
          </div>

          <HiOutlineMenu
            onClick={() => setNavBar(!navBar)}
            className="hidden lg:block cursor-pointer"
          />

          <div className="flex items-center gap-5 xl:gap-3">
            <div className="flex items-center gap-3">
              <TbSearch className="text-[#cb0f41] text-[20px] xl:text-[16px]" />
              <span className="xl:text-[14px]">Roʻyxatdan oʻtish</span>
            </div>
            <div className="flex items-center gap-2">
              <CiStar className="text-[26px] xl:text-[22px]" />
              <PiShoppingCart className="text-[26px] xl:text-[20px]" />
            </div>
          </div>
        </div>

        {/* Hiddindagi buttonlar */}
        <div
          className={`${
            navBar
              ? "lg:block md:grid md:grid-cols-4 md:gap-y-5 sm:grid sm:grid-cols-2"
              : "hidden"
          } xl:hidden relative bg-gray-500 py-5 px-3`}
        >
          <Link
            to="/vendors"
            className="text-[#444] hover:opacity-50 mx-4 font-bold xl:text-[14px] lg:text-[12px]"
          >
            Sotuvchi kurslari
          </Link>

          <Link
            to="/"
            className="text-[#444] hover:opacity-50 mx-4 font-bold xl:text-[14px] lg:text-[12px]"
          >
            Yo'nalishlar
          </Link>

          <Link
            to="/"
            className="text-[#444] hover:opacity-50 mx-4 font-bold xl:text-[14px] lg:text-[12px]"
          >
            Imtihonlar
          </Link>

          <Link
            to="/"
            className="text-[#444] hover:opacity-50 mx-4 font-bold xl:text-[14px] lg:text-[12px]"
          >
            Jadval
          </Link>

          <Link
            to="/"
            className="text-[#444] hover:opacity-50 mx-4 font-bold xl:text-[14px] lg:text-[12px]"
          >
            Birja
          </Link>

          <Link
            to="/"
            className="text-[#444] hover:opacity-50 mx-4 font-bold xl:text-[14px] lg:text-[12px]"
          >
            Biz haqimizda
          </Link>

          <Link
            to="/"
            className="text-[#444] hover:opacity-50 mx-4 font-bold xl:text-[14px] lg:text-[12px]"
          >
            Yangiliklar
          </Link>

          <Link
            to="/"
            className="text-[#444] hover:opacity-50 mx-4 font-bold xl:text-[14px] lg:text-[12px]"
          >
            Voqealar
          </Link>
        </div>
        {/* Hiddindagi buttonlar */}
      </nav>

      {/* yangiliklar modali */}
      <Modal
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={null}
        width={modalWidth}
      >
        <h1 className="text-[#cb0f41] text-[28px] font-semibold px-6">
          Yangiliklarga obuna bo'ling
        </h1>
        <p className="px-6 text-[#0a0a0a] my-6">
          Elektron pochta manzilingizni qoldiring va biznesni rivojlantirish
          uchun asosiy IT tendentsiyalaridan xabardor bo'ling.
        </p>
        <form className="px-6">
          <div className="flex items-center justify-between gap-5">
            <input
              required
              type="text"
              placeholder="Sizning elektron pochtangiz"
              className="h-[42px] outline-none border-[1px] border-[#c1c1c1] px-[14px] w-[60%]"
            />
            <button className="w-[40%] bg-[#cb0f41] h-[42px] rounded-[6px] uppercase text-white">
              Obuna boʻling
            </button>
          </div>
          <div className="my-6 flex items-start gap-3">
            <input
              type="checkbox"
              onChange={(e) => console.log(e.target.checked)}
            />
            <Link to="/" className="text-[#cb0f41] text-[12px]">
              Men Shaxsiy ma'lumotlarning maxfiyligi siyosatini o'qib chiqdim va
              shaxsiy ma'lumotlarni qayta ishlashga roziman
            </Link>
          </div>
        </form>
      </Modal>

      {/* yangiliklar modali */}

      <div
        className={`${
          scrolled && "fixed top-[66px] xl:top-[62px] mx-auto w-full bg-white"
        }`}
      >
        {onHoverTab == "1" && <VendorsList setOnHoverTab={setOnHoverTab} />}
        {onHoverTab == "2" && <Pathways setOnHoverTab={setOnHoverTab} />}
        {onHoverTab == "3" && <Exams setOnHoverTab={setOnHoverTab} />}
        {onHoverTab == "4" && null}
        {onHoverTab == "5" && null}
        {onHoverTab == "6" && <OurStory setOnHoverTab={setOnHoverTab} />}
        {onHoverTab == "7" && null}
        {onHoverTab == "8" && null}
      </div>

      <Modal
        centered
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        width={modalWidth}
      >
        <form className="grid grid-cols-1 p-6 gap-3 md:p-0 lg:p-2">
          <h1 className="text-[28px] font-semibold text-[#cb0f41]">
            Tizimga kirish
          </h1>
          <div className="flex items-center gap-4">
            <span>Login:</span>
            <input
              required
              type="text"
              placeholder="Iltimos, o'zingizni tanishtiring"
              className="h-[52px] lg:h-[42px] md:h-[32px] px-5 outline-none border-[1px] w-full border-gray-500 sm:h-[42px]"
            />
          </div>

          <div className="flex items-center gap-4">
            <span>Parol:</span>
            <input
              required
              type="text"
              placeholder="Telefon raqamingizni kiriting"
              className="h-[52px] lg:h-[42px] md:h-[32px] px-5 outline-none border-[1px] w-full border-gray-500 sm:h-[42px]"
            />
          </div>

          <div className="flex items-center gap-2">
            <input required type="checkbox" />
            <span>Meni eslaysizmi</span>
          </div>

          <button
            type="submit"
            className="w-2/5 h-[52px] uppercase lg:h-[42px] md:h-[32px] rounded-[6px] relative left-[60%] text-center bg-[#cb0f41] text-white font-semibold sm:h-[42px]"
          >
            Tizimga kirish
          </button>
        </form>
      </Modal>
    </div>
  );
}
