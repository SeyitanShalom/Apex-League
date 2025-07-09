import Image from "next/image";
import React from "react";
import { coaches } from "@/data/players";
import { players } from "@/data/players";

const TeamPlayers = () => {
  return (
    <div className="flex flex-col items-center gap-y-10">
      <div className="flex items-center gap-2 font-semibold">
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <Image
            src="/football club.png"
            alt="Team Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <h2>Team Name</h2>
      </div>
      <h3 className="bg-[#B82600] text-sm text-white text-center font-semibold py-2 w-full">
        Managers & Coaches
      </h3>
      <div className="grid grid-cols-3 gap-x-5 gap-y-8 place-items-center text-sm">
        {coaches.map((coach) => (
          <div
            key={coach.id}
            className="flex flex-col items-center gap-2 text-sm shadow-md w-[120px] h-36 px-2 py-4 rounded-lg"
          >
            <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center">
              <Image
                src={coach.image}
                alt={coach.name}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              <h4 className="font-semibold">{coach.name}</h4>
              <p className="text-sm text-gray-500">{coach.role}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="bg-[#B82600] text-sm text-white text-center font-semibold py-2 w-full">
        Players
      </h3>
      <div className="grid grid-cols-3 gap-x-5 gap-y-8 place-items-center text-sm">
        {players.map((player) => (
          <div
            key={player.id}
            className="flex flex-col items-center gap-2 text-sm shadow-md w-[120px] h-40 px-2 py-4 rounded-lg"
          >
            <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center">
              <Image
                src={player.image}
                alt={player.name}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              <h4 className="font-semibold">{player.name}</h4>
              <p className="text-sm text-gray-500">{player.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPlayers;
