import React from "react";
import { groups } from "@/data/groups";
import Stats from "@/Components/Stats";
import Image from "next/image";

const page = () => {
  return (
    <div className="text-sm flex flex-col gap-y-7 ">
      {groups.map((group) => (
        <div key={group.name}>
          <h2 className="font-bold mb-1 px-4">{group.name}</h2>
          <div>
            <table className="w-full ">
              <thead className="bg-[#B82600] text-white px-3">
                <tr>
                  <th className="text-left px-5">Name</th>
                  <th className="text-center px-1 py-1">P</th>
                  <th className="text-center px-1 py-1">W</th>
                  <th className="text-center px-1 py-1">D</th>
                  <th className="text-center px-1 py-1">L</th>
                  <th className="text-center px-1 py-1">F/A</th>
                  <th className="text-center px-1 py-1">Pts</th>
                </tr>
              </thead>
              <tbody>
                {group.teams.map((team, index) => (
                  <tr
                    key={team.name}
                    className={`${
                      index < 2 ? "bg-red-100" : ""
                    } border-b-2 border-gray-100 `}
                  >
                    <td className="px-5 ">
                      <div className="flex items-center gap-x-2 py-2">
                        <Image
                          src={team.image}
                          alt={`${team.name} Logo`}
                          width={18}
                          height={18}
                          className="rounded-full"
                        />
                        <p>{team.name}</p>
                      </div>
                    </td>
                    <td className="text-center py-1">{team.played}</td>
                    <td className="text-center py-1">{team.won}</td>
                    <td className="text-center py-1">{team.drawn}</td>
                    <td className="text-center py-1">{team.lost}</td>
                    <td className="text-center py-1">{team.goalFor}/{team.goalAgainst}</td>
                    <td className="text-center py-1">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <Stats />
    </div>
  );
};

export default page;
