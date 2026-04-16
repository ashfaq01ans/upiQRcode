import React from "react";
// import logo from "../assets/payMintLogo.png";
import title from "../assets/title.png";
import { FaCodeBranch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-800 rounded-b-2xl">
      <div className=" w-full p-5 ">
        <div className="Nav flex flex-col sm:flex-row items-center justify-around  ">
          <img src={title} alt="logo" className="h-35" />
          <p className="hidden md:block md:text-2xl lg:text-4xl text-gray-100 md:w-1/3 opacity-50">
            Generate custom payment QR codes online with flexible amounts and
            notes. Works seamlessly with all UPI apps including Google Pay,
            PayTM and PhonePe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
