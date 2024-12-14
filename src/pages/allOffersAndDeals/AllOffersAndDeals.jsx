import React from "react";
import { Link } from "react-router-dom";

function AllOffersAndDeals() {
  return (
    <Link
      to="/"
      className="w-full mx-auto h-[90px] uppercase font-semibold flex items-center justify-center hover:bg-[#cdcbc8] bg-[#ebe9e5]"
    >
      Barcha aktsiyalar va maxsus takliflar
    </Link>
  );
}

export default AllOffersAndDeals;
