import React from "react";
import { Link } from "react-router-dom";

function Pathways({ setOnHoverTab }) {
  return (
    <div className={`pt-5 pb-20`}>
      <div className="max-w-[1200px] mx-auto relative xl:px-3 lg:h-screen">
        <span className="text-[18px] font-bold text-[#B62C46]">
          Направления
        </span>

        <button
          className="absolute right-0 w-[12%] lg:w-[18%] md:w-1/4 xl:right-3 font-semibold rounded-[10px] border-[1px] border-[#444] text-[#B62C46]"
          onClick={() => setOnHoverTab("0")}
        >
          Go Back
        </button>
        <div className="w-full h-[2px] bg-gray-400 my-5"></div>

        <div className="w-full grid grid-cols-4 justify-between items-start gap-4 lg:grid-cols-3 lg:z-20 relative md:grid-cols-2 gap-y-10">
          <div className="grid grid-cols-1 gap-4 rounded-[20px] w-full gap-y-2 text-[14px]">
            <Link to="/"> Обучение по работе на российском ПО</Link>
            <Link to="/">Виртуализация</Link>
            <Link to="/">Личная эффективность</Link>
            <Link to="/">Моделирование и САПР</Link>
            <Link to="/">Моделирование и САПР</Link>
            <Link to="/">Программирование</Link>
            <Link to="/">Сетевые технологии</Link>
            <Link to="/">Безопасность и защита данных</Link>
            <Link to="/">Системное администрирование</Link>
            <Link to="/">Базы данных и аналитика</Link>
            <Link to="/">Облачные технологии</Link>
            <Link to="/">Офисные приложения и курсы для пользователей</Link>
            <Link to="/">Мастер-классы</Link>
            <Link to="/">Электронные курсы по информационной безопасности</Link>
            <Link to="/">Операционные системы</Link>
          </div>

          <div className="grid grid-cols-1 gap-4 rounded-[20px] w-full gap-y-2 text-[14px]">
            <Link to="/"> Лаборатория цифровой трансформации</Link>
            <Link to="/">Беспилотные авиационные системы</Link>
            <Link to="/">Архитектура решений</Link>
            <Link to="/">
              Облачная виртуализация на основе продуктов VMware
            </Link>
            <Link to="/">Сетевая виртуализация на основе продуктов VMware</Link>
            <Link to="/">
              Платформа по управлению облачной виртуализацией на основе
              продуктов VMware
            </Link>
            <Link to="/">
              Серверная виртуализация на основе продуктов VMware
            </Link>
            <Link to="/">Виртуализация, Администрирование</Link>
            <Link to="/">Техническая документация и обслуживание</Link>
            <Link to="/">Информационно-аналитическое направление</Link>
          </div>

          <div className="grid grid-cols-1 gap-4 rounded-[20px] w-full gap-y-2 text-[14px]">
            <Link to="/">Управленческое направление</Link>
            <Link to="/">Противодействие коррупции</Link>
            <Link to="/">Организационно-экономическое направление</Link>
            <Link to="/">Бизнес и системный анализ</Link>
            <Link to="/">Разработка и тестирование ПО</Link>
            <Link to="/">Zerocode, no-code, low-code</Link>
            <Link to="/">Цифровые технологии</Link>
            <Link to="/">Web-программирование</Link>
            <Link to="/">Веб-программирование</Link>
            <Link to="/">Обязательное обучение</Link>
            <Link to="/">Анализ данных</Link>
            <Link to="/">Управление проектами</Link>
            <Link to="/">DevOps</Link>
            <Link to="/">
              Искусственный интеллект, машинное обучение, нейросети
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 rounded-[20px] w-full gap-y-2 text-[14px]">
            <Link to="/">Автоматизация процессов</Link>
            <Link to="/">
              Информационного моделирования зданий и сооружений
            </Link>
            <Link to="/">Офисные приложения</Link>
            <Link to="/">Защита персональных данных</Link>
            <Link to="/">Информационно-коммуникационные технологии</Link>
            <Link to="/">Разработка и тестирование</Link>
            <Link to="/">Языки программирования</Link>
            <Link to="/">Профессиональная переподготовка</Link>
            <Link to="/">IT-менеджмент</Link>
            <Link to="/">Project Manager в IT</Link>
            <Link to="/">Product Owner</Link>
            <Link to="/">Product Manager</Link>
            <Link to="/">Курсы для руководителей проектов</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pathways;
