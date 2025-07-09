"use client";
import LineUps from "@/Components/LineUps";
import MatchEvents from "@/Components/MatchEvents";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { TbSoccerField } from "react-icons/tb";
import { TbTimelineEventText } from "react-icons/tb";
import { matches } from "@/data/matches";

const Page = () => {
  const { slug } = useParams();
  const fixture = matches.find((f) => String(f.id) === slug);
  const [details, setDetails] = useState("matchEvents");

  if (!fixture) return <div>Fixture not found</div>;

  //   const handleDetailsChange = () => {
  //     setDetails((prev) => (prev === "matchEvents" ? "lineUps" : "matchEvents"));
  //   };
  return (
    <div>
      <div className="flex items-center justify-evenly ">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 flex justify-center items-center rounded-full">
            <Image
              src="/football club.png"
              alt="Team A Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <h3 className="text-md font-semibold">{fixture.home}</h3>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[10px]">
            {fixture.date} | {fixture.time}
          </p>
          <h2 className="text-3xl font-semibold">{fixture.score}</h2>
          {fixture.status === "live" ? (
            <div className="flex items-center space-x-1">
              <div
                className="bg-green-600 rounded-full w-3 h-3 animate-blink"
                style={{
                  animation: "blink 2s infinite",
                }}
              ></div>
              <p className="text-xs">Live</p>
            </div>
          ) : fixture.status === "completed" ? (
            <div className="flex items-center space-x-1">
              <p className="text-xs">Finished</p>
            </div>
          ) : (
            <div className="flex items-center space-x-1">
              <p className="text-xl font-semibold">VS</p>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 flex justify-center items-center rounded-full">
            <Image
              src="/football club.png"
              alt="Team A Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <h3 className="text-md font-semibold">{fixture.away}</h3>
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
        <div>{details === "matchEvents" ? <MatchEvents /> : <LineUps />}</div>
      </div>
    </div>
  );
};

export default Page;
