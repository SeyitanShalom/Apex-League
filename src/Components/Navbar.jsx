"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="flex justify-between items-center px-5 py-2 relative">
      <div className="flex items-center justify-between gap-1">
        <Image src="/JV Logo.webp" alt="Logo" width={50} height={50} />
        <p className="text-xl -translate-y-0.5">|</p>
        <Image src="/Apex Logo.png" alt="Logo" width={70} height={50} />
      </div>
      <div
        onClick={() => toggleMenu()}
        className={`text-xl cursor-pointer transition-transform duration-400 ease-in-out ${
          open ? "rotate-90" : ""
        }`}
      >
        {open ? <RxCross2 /> : <FiMenu />}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            // style={{ originY: 0, overflow: "hidden", background: "#B82600" }}
            className="absolute right-6 top-15 w-36 rounded-lg p-3 text-sm bg-[#B82600] origin-top text-white font-bold flex flex-col gap-5 z-10 "
          >
            <Link onClick={() => setOpen(false)} href="/" className="">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} href="/matches" className="">
              Matches
            </Link>
            <Link onClick={() => setOpen(false)} href="/" className="">
              Results
            </Link>
            <Link onClick={() => setOpen(false)} href="/standings" className="">
              Standings
            </Link>
            <Link onClick={() => setOpen(false)} href="/teams" className="">
              Teams
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
