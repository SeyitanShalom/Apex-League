import Image from "next/image";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import { matches } from "@/data/matches";
import Link from "next/link";

const LiveMatch = () => {
  const liveMatches = matches.filter((f) => f.status === "live");
  return (
    <>
      {liveMatches.map((liveMatch) => (
        <Link key={liveMatch.id} href={`/matches/${liveMatch.id}`}>
          <div className=" rounded-xl py-4 px-2 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex justify-center items-center rounded-full">
                  <Image
                    src="/football club.png"
                    alt="Team A Logo"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-sm font-semibold">{liveMatch.home}</h3>
              </div>
              <h2 className="text-xl font-semibold">{liveMatch.score}</h2>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex justify-center items-center rounded-full">
                  <Image
                    src="/football club.png"
                    alt="Team A Logo"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-sm font-semibold">{liveMatch.away}</h3>
              </div>
            </div>
            <div className="flex items-center space-x-1 -translate-x-[2px]">
              <ImLocation2 className="text-xl" />
              <p className="text-xs">Oyemekun Grammar School Akure</p>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="bg-green-600 rounded-full w-3 h-3 animate-blink"
                style={{
                  animation: "blink 2s infinite",
                }}
              ></div>
              <p className="text-xs">Live</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default LiveMatch;
