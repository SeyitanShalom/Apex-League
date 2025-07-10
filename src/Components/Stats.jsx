"use client";
import React, { useState } from "react";
import { playerStats } from "@/data/playerStats";
import Image from "next/image";

const Stats = () => {
  const [showAllGoals, setShowAllGoals] = useState(false);
  const [showAllAssists, setShowAllAssists] = useState(false);
  const [showAllCleansheets, setShowAllCleansheets] = useState(false);

  const topGoals = [...playerStats].sort((a, b) => b.goals - a.goals);
  const topAssists = [...playerStats].sort((a, b) => b.assists - a.assists);
  const topCleansheets = [...playerStats].sort(
    (a, b) => b.cleansheets - a.cleansheets
  );

  return (
    <div className="mt-10 ">
      <h2 className="text-xl font-bold mb-4 text-center text-[#B82600]">
        Player Stats
      </h2>
      <div className="flex flex-col gap-10">
        {/* Goalscorers */}
        <div>
          <h3 className="font-semibold mb-2 text-white text-center py-0.5 bg-[#B82600]">
            Top Goalscorers
          </h3>
          <ul className="space-y-4 px-5">
            {(showAllGoals ? topGoals : topGoals.slice(0, 3)).map((player) => (
              <li
                key={player.name}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-x-3">
                  <Image
                    src={player.image}
                    alt={player.name}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <p className="flex flex-col">
                    <span>{player.name}</span>
                    <span className="text-xs text-gray-500">{player.team}</span>
                  </p>
                </div>
                <span className="font-bold">{player.goals}</span>
              </li>
            ))}
          </ul>
          {topGoals.length > 3 && (
            <button
              className="text-xs px-5 font-semibold text-[#B82600] cursor-pointer mt-4 underline"
              onClick={() => setShowAllGoals((prev) => !prev)}
            >
              {showAllGoals ? "Show less" : "See all"}
            </button>
          )}
        </div>
        {/* Assists */}
        <div>
          <h3 className="font-semibold mb-2 text-white text-center py-0.5 bg-[#B82600]">
            Top Assists
          </h3>
          <ul className="space-y-2 px-5">
            {(showAllAssists ? topAssists : topAssists.slice(0, 3)).map(
              (player) => (
                <li
                  key={player.name}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-x-3">
                    <Image
                      src={player.image}
                      alt={player.name}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <p className="flex flex-col">
                      <span>{player.name}</span>
                      <span className="text-xs text-gray-500">
                        {player.team}
                      </span>
                    </p>
                  </div>
                  <span className="font-bold">{player.goals}</span>
                </li>
              )
            )}
          </ul>
          {topAssists.length > 3 && (
            <button
              className="text-xs px-5 font-semibold text-[#B82600] cursor-pointer mt-4 underline"
              onClick={() => setShowAllAssists((prev) => !prev)}
            >
              {showAllAssists ? "Show less" : "See all"}
            </button>
          )}
        </div>
        {/* Clean Sheets */}
        <div>
          <h3 className="font-semibold mb-2 text-white text-center py-0.5 bg-[#B82600]">
            Top Clean Sheets
          </h3>
          <ul className="space-y-2 px-5">
            {(showAllCleansheets
              ? topCleansheets
              : topCleansheets.slice(0, 3)
            ).map((player) => (
              <li
                key={player.name}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-x-3">
                  <Image
                    src={player.image}
                    alt={player.name}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <p className="flex flex-col">
                    <span>{player.name}</span>
                    <span className="text-xs text-gray-500">{player.team}</span>
                  </p>
                </div>
                <span className="font-bold">{player.goals}</span>
              </li>
            ))}
          </ul>
          {topCleansheets.length > 3 && (
            <button
              className="text-xs px-5 font-semibold text-[#B82600] cursor-pointer mt-4 underline"
              onClick={() => setShowAllCleansheets((prev) => !prev)}
            >
              {showAllCleansheets ? "Show less" : "See all"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
