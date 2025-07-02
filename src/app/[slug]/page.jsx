"use client";
import LineUps from "@/Components/LineUps";
import MatchEvents from "@/Components/MatchEvents";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { TbSoccerField } from "react-icons/tb";
import { TbTimelineEventText } from "react-icons/tb";

const Page = () => {
  const [details, setDetails] = useState("matchEvents");

  //   const handleDetailsChange = () => {
  //     setDetails((prev) => (prev === "matchEvents" ? "lineUps" : "matchEvents"));
  //   };
  return (
    <div>
      <div className="flex items-center justify-evenly ">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 flex justify-center items-center border-2 border-[#B82600] rounded-full">
            <FiMenu className="text-3xl" />
          </div>
          <h3 className="text-md font-semibold">Team A</h3>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[10px]">02.07.2025 | 4:00pm</p>
          <h2 className="text-3xl font-semibold">0-0</h2>
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
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 flex justify-center items-center border-2 border-[#B82600] rounded-full">
            <FiMenu className="text-3xl" />
          </div>
          <h3 className="text-md font-semibold">Team B</h3>
        </div>
      </div>
      <div className="flex items-center justify-around mt-10 transition-all duration-300 ease-in-out">
        <div
          onClick={() => setDetails("matchEvents")}
          className={`flex items-center justify-center py-2 border-2 gap-1 border-[#B82600]  w-full cursor-pointer flex-1  ${
            details === "matchEvents"
              ? "bg-[#B82600] text-white"
              : "bg-white text-black"
          }`}
        >
          <p className="flex items-center gap-1 text-xs cursor-pointer">
            <TbTimelineEventText className="text-lg" />
            Match Events
          </p>
        </div>
        <div
          onClick={() => setDetails("lineUps")}
          className={`flex items-center justify-center py-2 border-2 gap-1 border-[#B82600] cursor-pointer w-full flex-1 ${
            details === "lineUps"
              ? "bg-[#B82600] text-white"
              : "bg-white text-black"
          }`}
        >
          <p className="flex items-center gap-1 text-xs cursor-pointer">
            <TbSoccerField className="text-lg" />
            Line Ups
          </p>
        </div>
      </div>
      <div>
        <div>
          {details === "matchEvents"
            ? <MatchEvents/>
            : <LineUps/>}
        </div>
      </div>
    </div>
  );
};

export default Page;
