import Image from "next/image";
import React from "react";
import { ImLocation2 } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 items-center text-xs mb-10 mt-10 ">
      <div className="flex items-center justify-between gap-1">
        <Image src="/JV Logo.webp" alt="Logo" width={50} height={50} />
        <p className="text-xl -translate-y-0.5">|</p>
        <Image src="/Apex Logo.png" alt="Logo" width={70} height={50} />
      </div>
      <div className="flex items-center gap-1">
        <ImLocation2 className="text-lg text-[#B82600]" />
        <p className="max-w-[250px]">
          Off, no 20, Abundant Grace Of God Trade Centre, Off Akure High School
          Road, Akure, Ondo State.
        </p>
      </div>
      <div className="flex items-center gap-1">
        <FaPhone className="text-xs text-[#B82600]" />
        <p>+234 813 488 0560, +234 906 475 0948</p>
      </div>
      <div className="flex items-center gap-1">
        <IoLogoWhatsapp className="text-[#B82600]" />
        <p>+234 814 589 0364</p>
      </div>
      <div className="flex items-center justify-around gap-x-5">
        <div className="flex items-center gap-1">
          <FaFacebook className="text-[#B82600]" />
          <p>Apex League</p>
        </div>
        <div className="flex items-center gap-1">
          <MdMail className="text-[#B82600]" />
          <p>hello.apexleague@gmail.com</p>
        </div>
        <div className="flex items-center gap-1">
          <RiInstagramFill className="text-[#B82600]" />
          <p>Apex.League01</p>
        </div>
      </div>

      <div>
        <p className="">
          &copy; {new Date().getFullYear()} Johnvents Apex League. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
