import React from "react";
import { teams } from "@/data/teams";
import Image from "next/image";

const TeamsPage = () => {
  return (
    <div>
      <h1 className="bg-[#B82600] text-white text-center font-semibold py-2">
        Teams
      </h1>
      <div className="p-8 grid grid-cols-3 gap-x-4 gap-y-8 place-items-center">
        {teams.map((team) => (
          <div
            key={team.id}
            className="flex flex-col items-center gap-2 text-sm font-semibold shadow-md w-28 h-32 px-2 py-4 rounded-lg"
          >
            {/* Team Logo */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center">
              <Image
                src={team.logo}
                alt={`${team.name} logo`}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <h2>{team.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
