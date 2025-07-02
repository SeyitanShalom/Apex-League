import React from "react";
import { FiMenu } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";

const Fixture = () => {
  return (
    <>
      <div className=" rounded-xl p-2 shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex justify-center items-center border-2 border-[#B82600] rounded-full">
              <FiMenu className="text-xl" />
            </div>
            <h3 className="text-sm font-semibold">Team E</h3>
          </div>
          <h2 className="text-xl font-semibold">0-0</h2>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex justify-center items-center border-2 border-[#B82600] rounded-full">
              <FiMenu className="text-xl" />
            </div>
            <h3 className="text-sm font-semibold">Team F</h3>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <ImLocation2 className="flex items-center space-x-1 text-xl -translate-x-[2px]" />
          <p className="text-xs">Oyemekun Grammar School Akure</p>
        </div>
        <div className="flex items-center space-x-1">
          <RiCalendarScheduleLine />
          <p className="text-xs">Live</p>
        </div>
      </div>
    </>
  );
};

export default Fixture;
