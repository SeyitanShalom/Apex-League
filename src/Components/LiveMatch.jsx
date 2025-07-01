import React from "react";
import { FiMenu } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";

const LiveMatch = () => {
  return (
    <div className="mt-20 mb-20">
      <h2 className="font-bold ">Live</h2>
      <div className="flex gap-5">
        <div className=" rounded-xl p-2 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex justify-center items-center border-2 border-[#B82600] rounded-full">
                <FiMenu className="text-xl" />
              </div>
              <h3 className="text-sm font-semibold">Team A</h3>
            </div>
            <h2 className="text-xl font-semibold">0-0</h2>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex justify-center items-center border-2 border-[#B82600] rounded-full">
                <FiMenu className="text-xl" />
              </div>
              <h3 className="text-sm font-semibold">Team B</h3>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MdLocationPin className="text-xl" />
            <p className="text-xs">Oyemekun Grammar School Akure</p>
          </div>
          <div className="flex items-center space-x-1">
            <div
              className="bg-green-600 rounded-full w-3 h-3 animate-blink"
              style={{
                animation: "blink 2s infinite",
              }}
            ></div>
            <p className="text-xs">Live</p>
          </div>
        </div>
        <div className=" rounded-xl p-3 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex justify-center items-center border-2 border-[#B82600] rounded-full">
                <FiMenu className="text-xl" />
              </div>
              <h3 className="text-sm font-semibold">Team A</h3>
            </div>
            <h2 className="text-xl font-semibold">0-0</h2>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex justify-center items-center border-2 border-[#B82600] rounded-full">
                <FiMenu className="text-xl" />
              </div>
              <h3 className="text-sm font-semibold">Team B</h3>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MdLocationPin className="text-xl" />
            <p className="text-xs">Oyemekun Grammar School Akure</p>
          </div>
          <div className="flex items-center space-x-1">
            <div className="bg-green-600 rounded-full w-3 h-3 animate-blink"
            style={{animation: "blink 2s infinite"}}
            ></div>
            <p className="text-xs">Live</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatch;
