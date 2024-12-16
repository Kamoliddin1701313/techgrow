import React from "react";
import CoursesHeader from "../../components/coursesHeader/CoursesHeader";
import { Link } from "react-router-dom";
import space from "../../assets/images/space.png";
import actpa from "../../assets/images/actpa.png";
import akademiya from "../../assets/images/akademiya.png";
import ideco from "../../assets/images/ideco.png";
import kaspersky from "../../assets/images/kaspersky.png";
import posgrespro from "../../assets/images/posgrespro.png";
import softline from "../../assets/images/softline.png";

//
import acson from "../../assets/images/courseCatalogImg/acson.png";
import almi from "../../assets/images/courseCatalogImg/almi.png";
import basealt from "../../assets/images/courseCatalogImg/basealt.png";
import basis from "../../assets/images/courseCatalogImg/basis.png";
import communigate from "../../assets/images/courseCatalogImg/communigate.png";
import cyberprot from "../../assets/images/courseCatalogImg/cyberprot.png";
import eltex from "../../assets/images/courseCatalogImg/eltex.png";
import eor from "../../assets/images/courseCatalogImg/eor.png";
import gagarin from "../../assets/images/courseCatalogImg/gagarin.png";
import gorizont from "../../assets/images/courseCatalogImg/gorizont.png";
import heolek from "../../assets/images/courseCatalogImg/heolek.png";
import hostvm from "../../assets/images/courseCatalogImg/hostvm.png";
import html from "../../assets/images/courseCatalogImg/html.png";
import ibs from "../../assets/images/courseCatalogImg/ibs.png";
import ivi from "../../assets/images/courseCatalogImg/ivi.png";
import kodbezopasnosti from "../../assets/images/courseCatalogImg/kodbezopasnosti.png";
import kriptopro from "../../assets/images/courseCatalogImg/kriptopro.png";
import myoffice from "../../assets/images/courseCatalogImg/myoffice.png";
import nanocad from "../../assets/images/courseCatalogImg/nanocad.png";
import orion from "../../assets/images/courseCatalogImg/orion.png";
import positive from "../../assets/images/courseCatalogImg/positive.png";
import redsoft from "../../assets/images/courseCatalogImg/redsoft.png";
import relex from "../../assets/images/courseCatalogImg/relex.png";
import robin from "../../assets/images/courseCatalogImg/robin.png";
import ros from "../../assets/images/courseCatalogImg/ros.png";
import serachinform from "../../assets/images/courseCatalogImg/serachinform.png";
import smallofis from "../../assets/images/courseCatalogImg/smallofis.png";
import sovnet from "../../assets/images/courseCatalogImg/sovnet.png";
import truboprovod from "../../assets/images/courseCatalogImg/truboprovod.png";
import ug from "../../assets/images/courseCatalogImg/ug.png";

//

import autodesk from "../../assets/techPioneers/autodesk.png";
import broadcom from "../../assets/techPioneers/broadcom.png";
import cisc from "../../assets/techPioneers/cisc.png";
import cp2 from "../../assets/techPioneers/cp2.png";
import dassault from "../../assets/techPioneers/dassault.png";
import grafi from "../../assets/techPioneers/grafi.png";
import ibm from "../../assets/techPioneers/ibm.png";
import itil from "../../assets/techPioneers/itil.png";
import microsoft from "../../assets/techPioneers/microsoft.png";
import redhat from "../../assets/techPioneers/redhat.png";
import veeam from "../../assets/techPioneers/veeam.png";
import veritas from "../../assets/techPioneers/veritas.png";
import vmware from "../../assets/techPioneers/vmware.png";

function CourseCatalog() {
  const imgdata = [
    { id: 1, url: "/", img: space },
    { id: 2, url: "/", img: actpa },
    { id: 3, url: "/", img: akademiya },
    { id: 4, url: "/", img: kaspersky },
    { id: 5, url: "/", img: posgrespro },
    { id: 6, url: "/", img: softline },
    { id: 7, url: "/", img: acson },
    { id: 8, url: "/", img: almi },
    { id: 9, url: "/", img: basealt },
    { id: 10, url: "/", img: communigate },
    { id: 11, url: "/", img: cyberprot },
    { id: 12, url: "/", img: eor },
    { id: 13, url: "/", img: eltex },
    { id: 14, url: "/", img: gagarin },
    { id: 15, url: "/", img: gorizont },
    { id: 16, url: "/", img: heolek },
    { id: 17, url: "/", img: hostvm },
    { id: 18, url: "/", img: html },
    { id: 19, url: "/", img: ibs },
    { id: 20, url: "/", img: ivi },
    { id: 21, url: "/", img: kodbezopasnosti },
    { id: 22, url: "/", img: kriptopro },
    { id: 23, url: "/", img: myoffice },
    { id: 24, url: "/", img: nanocad },
    { id: 25, url: "/", img: positive },
    { id: 26, url: "/", img: redsoft },
    { id: 27, url: "/", img: relex },
    { id: 28, url: "/", img: orion },
    { id: 29, url: "/", img: robin },
    { id: 30, url: "/", img: ros },
    { id: 31, url: "/", img: serachinform },
    { id: 32, url: "/", img: smallofis },
    { id: 33, url: "/", img: sovnet },
    { id: 34, url: "/", img: truboprovod },
    { id: 35, url: "/", img: ug },
    { id: 36, url: "/", img: basis },
    { id: 37, url: "/", img: ideco },
  ];

  const techPioneers = [
    { id: 1, url: "/", img: autodesk },
    { id: 2, url: "/", img: broadcom },
    { id: 3, url: "/", img: cisc },
    { id: 4, url: "/", img: cp2 },
    { id: 5, url: "/", img: dassault },
    { id: 6, url: "/", img: grafi },
    { id: 7, url: "/", img: ibm },
    { id: 8, url: "/", img: itil },
    { id: 9, url: "/", img: microsoft },
    { id: 10, url: "/", img: redhat },
    { id: 11, url: "/", img: veeam },
    { id: 12, url: "/", img: veritas },
    { id: 13, url: "/", img: vmware },
  ];

  console.log(imgdata);

  return (
    <div>
      <CoursesHeader text="Sotuvchilar tomonidan IT mutaxassislari uchun kurslar" />
      <div className="max-w-[1200px] mx-auto pb-8 xl:px-3">
        <h1 className="text-center my-5 text-[26px] text-[#444]">
          Rus sotuvchilari
        </h1>
        <div className="w-full grid grid-cols-6 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {imgdata?.map((valuImg) => (
            <Link
              key={valuImg.id}
              to={valuImg.url}
              className="flex items-center px-5 h-[110px] justify-center border-[1px]"
            >
              <img src={valuImg.img} alt="img" className="w-full h-[60px]" />
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pb-8 xl:px-3">
        <h1 className="text-center my-5 text-[26px] text-[#444]">
          Chet ellik sotuvchilar
        </h1>
        <div className="w-full grid grid-cols-6 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {techPioneers?.map((valuImg) => (
            <Link
              key={valuImg.id}
              to={valuImg.url}
              className="flex items-center px-5 h-[110px] justify-center border-[1px]"
            >
              <img src={valuImg.img} alt="img" className="w-full h-[60px]" />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-[1200px] mx-auto pb-4 xl:px-3 text-[#444] text-[14px]">
        <p>
          Softline o'quv markazi turli sotuvchilardan mashhur IT yo'nalishlari
          bo'yicha kurslarni taklif etadi. Ta'lim va vakolatli dasturlardan
          sertifikat olish siz uchun muntazam ravishda mavjud.
        </p>
        <p>
          Softline 3000 dan ortiq dasturiy ta'minot va apparat
          ta'minotchilarining hamkori bo'lib, barcha asosiy sotuvchilar orasida
          eng yuqori hamkor maqomiga ega:
        </p>
        <p>
          Mircosoft, Cisco Oracle, IDB, VMware, Autodesk, Kaspersky va
          boshqalar. va hokazo. Professional mukammallikka erishmoqchi bo'lgan
          sohani tanlang: axborot xavfsizligi, bulutlar, biznes ilovalari,
          dasturlash, boshqaruv, tahlil va boshqalar. Softline o'quv markazida
          siz topasiz Sizga mos keladigan IT kurslari, ularning narxi sizning
          byudjetingizga ijobiy bog'liq bo'ladi. O'qituvchilar muntazam ravishda
          sotuvchi mahsulotlari bo'yicha trening va sertifikatlashdan o'tadilar
          va o'zlarining malakalarini yangilaydilar, shunda talabalar faqat eng
          so'nggi ma'lumotlarni oladilar va juda talab qilinadigan ko'nikmalarga
          ega bo'lishadi.
        </p>
        <p>
          Bizning portfelimiz yangi boshlanuvchilar va o'z darajasini oshirishni
          istagan professionallar uchun ham IT kurslarini o'z ichiga oladi. Siz
          IT-mutaxassislari uchun masofaviy kurslarni yoki yuzma-yuz darslarni
          tanlashingiz, shuningdek, oʻzingizni qiziqtirgan kursni qulay
          narxlarda oson va tez xarid qilishingiz mumkin.
        </p>
      </div>
    </div>
  );
}

export default CourseCatalog;
